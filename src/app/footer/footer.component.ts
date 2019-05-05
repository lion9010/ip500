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
    this.noticias = _noticias.obternerNoticias();
    for (let index = 0; index < this.noticias.length; index++) {
      console.log(this.noticias[index].fecha.toString().substr(4,2))
      
    }
    console.log(this.noticias)
  }

  ngOnInit() {
  }

  
}

