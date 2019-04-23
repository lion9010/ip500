import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent implements OnInit {
  titulo:string = 'Kit R3 De Desarrollo';

  constructor() { }

  ngOnInit() {
  }

}
