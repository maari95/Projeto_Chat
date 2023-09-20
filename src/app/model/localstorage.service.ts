import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  private localstorage: Storage;

  constructor() { 
    this.localstorage = window.localStorage;
  }
  setNomeUsuario(nomeUsuario: string){
    this.localstorage.setItem('usuario', nomeUsuario);
  }
  getNomeUsuario(){
    return this.localstorage.getItem('usuario');
  }
}
