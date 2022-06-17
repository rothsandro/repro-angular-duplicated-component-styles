import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./../../styles/styling-component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,

})
export class Demo1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
