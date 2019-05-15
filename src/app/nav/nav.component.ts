import { Component, OnInit } from '@angular/core';
import { NoticiasService} from '../noticias.service'



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  title: string = 'IP500\u00ae';
  
  productos: any[] = []

  toggleCollapse() {
    let element: HTMLElement = document.getElementsByClassName('navbar-toggler')[0] as HTMLElement;
    element.click();

  }

  constructor(
    private _productos : NoticiasService
  ) {
    this.productos = _productos.obtenerProductos();
    console.log(this.productos)
   }

  ngOnInit() {

  }


}

