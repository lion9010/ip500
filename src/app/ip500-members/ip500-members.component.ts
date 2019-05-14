import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';


@Component({
  selector: 'app-ip500-members',
  templateUrl: './ip500-members.component.html',
  styleUrls: ['./ip500-members.component.scss']
})
export class Ip500MembersComponent implements OnInit {

  titulo: string= 'Miembros';

  miembros: any [] = [];
  url: string []= []

  constructor(
    private _miembros : NoticiasService
  ) { 
    this.miembros = this._miembros.obtenerMiembros();
    console.log(this.miembros)

    // * En caso de crear una propiedad del objeto para las URLs se puede eliminar este "for"

    for (let index = 0; index < this.miembros.length; index++) {
      const tituloUrl = this.miembros[index]['name'].replace(/ /g,"-",).slice(0,40);
      this.url[index] =tituloUrl
    }

  }

  ngOnInit() {
  }

}
