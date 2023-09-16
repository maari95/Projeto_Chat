import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  nomeUsuario: string = '';


  setUsuario(nome: string){
    this.nomeUsuario=nome;
  }
  getNomeUsuario(){
    return this.nomeUsuario;
  }

  constructor() { }
}
