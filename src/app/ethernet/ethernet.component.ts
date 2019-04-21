import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ethernet',
  templateUrl: './ethernet.component.html',
  styleUrls: ['./ethernet.component.scss']
})
export class EthernetComponent implements OnInit {

  titulo: string = 'Ethernet Gateway'

  constructor() { }

  ngOnInit() {
  }

}
