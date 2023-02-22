import { Component, OnInit } from '@angular/core';
import * as jsonData from '../../../assets/example.json';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data:any = jsonData;
  constructor() {
    this.data = this.data["problems"];
  }
  ngOnInit() {
    console.log('Data', this.data);
  }

}
