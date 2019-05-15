import { Injectable } from '@angular/core';
import { noticias } from './data/noticias.json';
import { miembros } from './data/members.json';
import { socios } from './data/partners.json';
import { productos } from './data/products.json'

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  
  //JSON
  //* Si se desea optimizar se deberían filtrar por los objetos exclusivamente necesarios

  noticias: any [] = noticias.sort(function(a, b){return b.fecha - a.fecha});

  miembros: any [] = miembros[0].member.sort(function(a, b){
    if (a.name < b.name) {return -1}
    if (a.name > b.name) {return 1}
    return 0;
  });

  socios: any [] = socios;

  productos: any [] = productos

  //JSON


  constructor() {}

  obternerNoticias(){ return this.noticias }
  obtenerUno(i){ return this.noticias[i] }

  obtenerMiembros(){ return this.miembros }
  unMiembro(i){ return this.miembros[i] }

  obtenerSocios(){ return this.socios }
  unSocio(i){ return this.socios[i] }

  obtenerProductos() { return this.productos }
  unProducto(i){ return this.productos[i] }

}
