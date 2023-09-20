import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/model/chat.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { LocalstorageService } from 'src/app/model/localstorage.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  
  data1 = new Date();
  mensagem: { user: string, mensagem: string }[] = [];
  user: string='';
  novaMensagem: string = '';


  constructor(private chatService: ChatService, 
    private modalCtrl:ModalController, 
    private service: LocalstorageService)  {}

  ngOnInit() {
    this.chatService.getMensagem().subscribe((mensagem) => {
      this.mensagem = mensagem;
    });

  }

  salvarNomeUsuario(){
    if(this.user.trim() !== ''){
      localStorage.setItem('user', this.user);
      this.user='';
    }
  }
  getNomeUsuario(){
    if(this.user){
      const value = this.service.getNomeUsuario();
      alert (value || 'Item não encontrado');
      this.user = '';
    }
  }

  sendMensagem() {
    if (this.novaMensagem.trim() !== '') {
      this.chatService.sendMensagem(this.novaMensagem);
      this.mensagem.push({user: this.user, mensagem: this.novaMensagem});
      this.novaMensagem = '';


    }
  }
  
  async abrirModalLogin() {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
    });
    await modal.present();

    modal.onDidDismiss().then((result) => {
      if (result.data && result.data.success) {
        
      }
    });

  }
}


