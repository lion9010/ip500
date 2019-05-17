import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiasService } from '../noticias.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  producto: any={};
  caracteristicas: any = {};

  constructor(
    private ruta: ActivatedRoute,
    private _servicio: NoticiasService
  ) { 
    this.ruta.params.subscribe(params =>{
      this.producto = this._servicio.unProducto(params['id'])
    })
  }

  ngOnInit() {
  }

}
