import { Injectable } from '@angular/core';
import { noticias } from './data/noticias.json';
import { miembros } from './data/members.json';
import { socios } from './data/partners.json'

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {


  //JSON

  noticias: any [] = noticias.sort(function(a, b){return b.fecha - a.fecha});

  miembros: any [] = miembros[0].member.sort(function(a, b){
    if (a.name < b.name) {return -1}
    if (a.name > b.name) {return 1}
    return 0;
  });

  socios: any [] = socios

  //JSON


  constructor() {}

  obternerNoticias(){ return this.noticias }
  obtenerUno(i){ return this.noticias[i] }

  obtenerMiembros(){ return this.miembros }
  unMiembro(i){ return this.miembros[i] }

  obtenerSocios(){ return this.socios }
  unSocio(i){ return this.socios[i] }

}
