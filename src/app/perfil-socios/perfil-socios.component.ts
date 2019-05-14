import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiasService } from '../noticias.service'

@Component({
  selector: 'app-perfil-socios',
  templateUrl: './perfil-socios.component.html',
  styleUrls: ['./perfil-socios.component.scss']
})
export class PerfilSociosComponent implements OnInit {

  socio: any[] = []

  constructor(
    private ruta : ActivatedRoute,
    private _service : NoticiasService
  ) {
    this.ruta.params.subscribe(params => {
      this.socio = this._service.unSocio(params['id'])
    })
   }

  ngOnInit() {
  }

}
