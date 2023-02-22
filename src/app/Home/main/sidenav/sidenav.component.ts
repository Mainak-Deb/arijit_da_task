import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @Input() dataset: any;
  isExpanded:boolean=true;
  title:string = "";
  passData: any = [];
  ngOnInit(): void {
      for (let i in this.dataset) {
        this.passData.push(i);
      }

  }

}
