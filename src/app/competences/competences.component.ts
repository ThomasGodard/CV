import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss'],
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
export class CompetencesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
