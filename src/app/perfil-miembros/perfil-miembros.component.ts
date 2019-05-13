import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-perfil-miembros',
  templateUrl: './perfil-miembros.component.html',
  styleUrls: ['./perfil-miembros.component.scss']
})
export class PerfilMiembrosComponent implements OnInit {

  miembro: any[] = [];

  constructor(
    private ruta: ActivatedRoute,
    private _service: NoticiasService
    ) {
    this.ruta.params.subscribe(params =>{
      this.miembro = this._service.unMiembro(params['id'])
    })
   }

  ngOnInit() {
  }

}
