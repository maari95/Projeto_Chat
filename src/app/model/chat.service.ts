import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, timestamp } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  Mensagem: any;

  constructor(private data: AngularFireDatabase) { }

  
  setUser(user: string){
    localStorage.setItem('user', user);
  }
  getUser(): string | null {
    return localStorage.getItem('user');
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


