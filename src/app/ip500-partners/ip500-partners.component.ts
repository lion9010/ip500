import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service'

@Component({
  selector: 'app-ip500-partners',
  templateUrl: './ip500-partners.component.html',
  styleUrls: ['./ip500-partners.component.scss']
})
export class Ip500PartnersComponent implements OnInit {

  titulo: string= 'Asociados';

  socios: any[] = [];
  url: string[] = [];

  constructor(
    private _socios: NoticiasService
  ) { 
    this.socios = this._socios.obtenerSocios();
    for (let index = 0; index < this.socios.length; index++) {
      const tituloUrl = this.socios[index]['name'].replace(/ /g,"-",).slice(0,40);
      this.url[index] =tituloUrl
    }
  }

  ngOnInit() {
  }

}
