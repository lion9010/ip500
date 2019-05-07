import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service'

@Component({
  selector: 'app-news-news',
  templateUrl: './news-news.component.html',
  styleUrls: ['./news-news.component.scss']
})
export class NewsNewsComponent implements OnInit {

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
