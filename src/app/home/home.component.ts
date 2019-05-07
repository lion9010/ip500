import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  noticias: any []= [];
  url: string []= []

  constructor(private _noticias: NoticiasService) {
    this.noticias = _noticias.obternerNoticias();
    
    // * En caso de crear una propiedad del objeto para las URLs se puede eliminar este "for"
    
    for (let index = 0; index < _noticias.obternerNoticias().length; index++) {
      const tituloUrl = _noticias.obternerNoticias()[index]['titulo'].replace(/ /g,"-",).slice(0,40);
      this.url[index] =tituloUrl
    }
  }

  ngOnInit() {
  }

}
