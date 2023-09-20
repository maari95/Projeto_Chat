import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  nomeUsuario: string = '';

  constructor() {
   }

  setUsuario(nomeUsuario: string){
    this.nomeUsuario=nomeUsuario;
  }
  getNomeUsuario(){
    return this.nomeUsuario;
  }

}
