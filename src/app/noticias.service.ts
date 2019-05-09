import { Injectable } from '@angular/core';
import { noticias } from './data/noticias.json'

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {


  //JSON

  noticias: any [] = noticias.sort(function(a, b){return b.fecha - a.fecha});
  otrasNoticias: any [] = noticias.sort(function(a, b){return b.fecha - a.fecha});

  //JSON


  constructor() {}

  obternerNoticias(){
    return this.noticias
  }

  obtenerUno(i){
    return this.noticias[i]
  }

  obtenerOtras(i){
    return this.otrasNoticias.splice(i,1)
  }

}
