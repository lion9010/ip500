import { Injectable } from '@angular/core';
import { noticias } from './data/noticias.json'

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  //JSON

  noticias: any [] = noticias.sort(function(a, b){return b.fecha - a.fecha});

  //JSON

  constructor() {
    console.log(noticias)
  }

  obternerNoticias(){
    return this.noticias
  }
}
