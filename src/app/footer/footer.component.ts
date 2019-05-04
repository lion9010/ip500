import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  noticias: any [] = []

  constructor(private _noticias:NoticiasService) { 
    this.noticias = _noticias.obternerNoticias()
  }

  ngOnInit() {
  }

}
