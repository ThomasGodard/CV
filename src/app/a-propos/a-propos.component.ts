import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.scss'],
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
export class AProposComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
