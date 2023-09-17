import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/model/shared.service';
import { ChatService } from 'src/app/model/chat.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  
  nomeUsuario: string = '';

  constructor(private modalCtrl: ModalController, 
    private router: Router,
    private shared: SharedService
    ) { }

  
  setUsername(){
    this.shared.setUsuario(this.nomeUsuario);
  }  

  ngOnInit() {}

  cancelar() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
  // async fecharModal() {
  //   await this.modalController.dismiss();
  // }

  async confirm() {
    const nomeUsuario = 'usuario';

    if (this.nomeUsuario != '') {
      // Autenticação bem-sucedida, feche o modal e realize ações adicionais, como redirecionar o usuário.
      this.shared.setUsuario(this.nomeUsuario);
      await this.modalCtrl.dismiss({ success: true });
      this.redirecionarUsuarioParaChat();
        
  }else {
      // Se a autenticação falhar, exiba uma mensagem de erro ao usuário.
      this.exibirMensagemDeErro("Falha ao entrar");
    }
      
  }
  exibirMensagemDeErro(mensagem:string){
    console.log(mensagem)
  }
  redirecionarUsuarioParaChat() {
    // Use o Router para navegar para a página de chat.
    this.router.navigate(['chat']);
  }
}
