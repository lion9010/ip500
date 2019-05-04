import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  noticias: any [] = []

  constructor(private _noticias:NoticiasService) {
    this.noticias = _noticias.obternerNoticias()
  }

  ngOnInit() {
  }

}
