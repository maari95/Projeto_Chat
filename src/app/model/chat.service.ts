import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, timestamp } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  Mensagem: any;
  nomeUsuario: string='';

  constructor(private data: AngularFireDatabase, 
    private shared: SharedService) {

    this.nomeUsuario=this.shared.getNomeUsuario();
     }

  
  setUser(){
    return this.shared.setUsuario('nomeUsuario');
  }

  getUser(){
    return this.shared.getNomeUsuario();
  }
  
  getMensagem(): Observable<any> {
    return this.data.list('mensagem').valueChanges();
  }

  sendMensagem(mensagem: string) {
    const user = this.getUser();
    if(user){
    this.data.list('mensagem').push({
      user: user,
      mensagem: mensagem,
      timestamp: Date.now()
    });
    
  }else{
    console.error('Nome de usuário não definido');
  }
  }
}


