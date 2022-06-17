import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./../../styles/styling-component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Demo2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
