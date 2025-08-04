import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  developerName: string = 'Guilherme Zago Canesin';
  testDate: string = '04/08/2025';
  
  constructor() { }

  ngOnInit() {
  }

}
