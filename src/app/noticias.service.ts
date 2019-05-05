import { Injectable } from '@angular/core';
import { noticias } from './data/noticias.json'
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {


  //JSON

  noticias: any [] = noticias.sort(function(a, b){return b.fecha - a.fecha});

  //JSON

  constructor() {}

  obternerNoticias(){
    return this.noticias
  }
}
