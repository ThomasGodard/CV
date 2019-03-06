import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss'],
  animations: [
    trigger('fadeInAnimation', [
      // route 'enter' transition
      transition(':enter', [

        // styles at start of transition
        style({opacity: 0}),

        // animation and styles at end of transition
        animate('.4s', style({opacity: 1}))
      ]),
    ])
  ],
  host: { '[@fadeInAnimation]': '' }
})
export class FormationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
