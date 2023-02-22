import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expand',
  templateUrl: './expand.component.html',
  styleUrls: ['./expand.component.css'],
})
export class ExpandComponent implements OnInit {
  @Input() data: any;
  @Input() title!: string | null;
  @Input() isParentExpanded!:boolean;

  passData: any = [];
  state: boolean = false;
  isExpanded:boolean=false;


  constructor() {}

  ngOnInit(): void {
    if (this.data.length!=undefined)  {
      this.state = false;
    } else {
      for (let i in this.data) {
        this.passData.push(i);
      }
      console.log(this.isParentExpanded,this.passData);
    }
  }

  expandDiv(): void{
    this.isExpanded =!this.isExpanded;
    console.log(this.isExpanded);
  }

}
