import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiasService } from '../noticias.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  noticia: any[] = [];
  otrasNoticias: any [] = []

  constructor(
    private ruta: ActivatedRoute,
    private _servicio: NoticiasService
  ) {
    this.ruta.params.subscribe(params => {
      this.noticia = this._servicio.obtenerUno(params['id']);
    })
    this.otrasNoticias = this._servicio.obternerNoticias();
    
  }

  ngOnInit() {
  }

}
