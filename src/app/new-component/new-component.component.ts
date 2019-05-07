import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent implements OnInit {

  
  constructor() {
    var texto = document.getElementById('texto');
    console.log(texto)
    
   }
  
  ngOnInit() {
    
  }

}
