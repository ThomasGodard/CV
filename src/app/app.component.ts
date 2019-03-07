import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('enter', [
      state('out', style({
        opacity: 1
      })),
      state('*', style({
        opacity: 0
      })),
      transition('out => *', [
        animate('0.4s')
      ])
    ]),
  ],
})
export class AppComponent implements OnInit {
  menus = [
    {
      title: 'A Propos',
      link: ''
    },
    {
      title: 'Competences',
      link: '/competences'
    },
    {
      title: 'Expériences Professionnelles',
      link: '/experience-pro'
    },
    {
      title: 'Formations',
      link: '/formations'
    },
    // {
    //   title: 'Loisirs',
    //   link: '/loisirs'
    // }
  ];

  //  mettre à false pour l'ecran d'accueil
  isEnter: boolean = false;

  selectedMenu: string = this.menus[0].title;

  constructor(private location: Location) {
  }

  ngOnInit(): void {
    this.location.subscribe(x => this.setSelectedMenu(this.menus.find(menu => x.url === menu.link)));
  }

  setSelectedMenu(menu: any): void {
    this.selectedMenu = menu.title;
  }

  onEnter(): void {
    this.isEnter = true;
  }
}
