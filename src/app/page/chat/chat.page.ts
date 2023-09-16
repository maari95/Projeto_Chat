import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/model/chat.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  mensagem: { user: string, mensagem: string }[] = [];
  user: string='';
  novaMensagem: string = '';


  constructor(private chatService: ChatService, private modalCtrl:ModalController)  { }

  ngOnInit() {
    this.chatService.getMensagem().subscribe((mensagem) => {
      this.mensagem = mensagem;
    });

  }
  salvarNomeUsuario(){
    if(this.user.trim() !== ''){
      localStorage.setItem('user', this.user);
    }
  }
  sendMensagem() {
    if (this.novaMensagem.trim() !== '') {
      this.chatService.sendMensagem(this.novaMensagem);
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


