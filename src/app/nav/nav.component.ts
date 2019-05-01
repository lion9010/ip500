import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  title: string = 'IP500\u00ae'

  toggleCollapse() {
    let element: HTMLElement = document.getElementsByClassName('navbar-toggler')[0] as HTMLElement;
    element.click();

  }

  constructor() { }

  ngOnInit() {

  }


}

