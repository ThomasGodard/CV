import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-loisirs',
  templateUrl: './loisirs.component.html',
  styleUrls: ['./loisirs.component.scss'],
  animations: [
    trigger('fadeInAnimation', [
      // route 'enter' transition
      transition(':enter', [

        // styles at start of transition
        style({opacity: 0}),

        // animation and styles at end of transition
        animate('0.4s', style({opacity: 1}))
      ]),
    ])
  ],
  host: { '[@fadeInAnimation]': '' }
})
export class LoisirsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
