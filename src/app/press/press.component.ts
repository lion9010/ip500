import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service'

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss']
})
export class PressComponent implements OnInit {

  // Se separaron las bases, se podría optimizar el código si se aplica directamente el filtro para cada sección

  prensas: any = {}
  secciones: any = []


  /* comunicados: any = [];
  comunicadosIdiomas: any = [];
  kit: any = [];
  kitIdiomas: any = [] */


  constructor(
    private _service: NoticiasService
  ) {
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }
    function ordenar(a, b){
      return new Date(b.fecha.year, b.fecha.month-1, b.fecha.day).getTime() - new Date(a.fecha.year, a.fecha.month-1, a.fecha.day).getTime()
    }

    this.prensas = _service.obtenerPrensas()
    this.prensas.sort(ordenar)

    // SECCIONES
    this.prensas.forEach(element => {
      this.secciones.push(new Object({"titulo":element.seccion}))
    });
    // falta filtrar el objeto
    this.secciones = this.secciones.filter(onlyUnique)

    console.log(this.secciones)


    // comunicados ------------------------------>>
   /*  this.prensas.forEach(element => {
      if (element.ComunicadoPrensa == true) {
        this.comunicados.push(element)
      }
    });
    this.comunicados.forEach(element => {
      this.comunicadosIdiomas.push(element.idioma)
    });
    this.comunicadosIdiomas = this.comunicadosIdiomas.filter(onlyUnique); */
    


    // kit ----------------------------------->>
    /* this.prensas.forEach(element => {
      if (element.KitPrensaIyC == true) {
        this.kit.push(element)
      }
    });
    this.kit.forEach(element => {
      this.kitIdiomas.push(element.idioma)
    });
    this.kitIdiomas = this.kitIdiomas.filter(onlyUnique); */

    
    
    
  }

  ngOnInit() {
  }

}
