import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-experiences-pro',
  templateUrl: './experiences-pro.component.html',
  styleUrls: ['./experiences-pro.component.scss'],
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
export class ExperiencesProComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
