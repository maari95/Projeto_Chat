import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  nomeUsuario: string = '';


  setUsuario(nomeUsuario: string){
    this.nomeUsuario=nomeUsuario;
  }
  getNomeUsuario(){
    return this.nomeUsuario;
  }

  constructor() { }
}
