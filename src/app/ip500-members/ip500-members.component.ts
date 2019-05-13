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

  constructor(
    private _miembros : NoticiasService
  ) { 
    this.miembros = this._miembros.obtenerMiembros();
    console.log(this.miembros)
  }

  ngOnInit() {
  }

}
