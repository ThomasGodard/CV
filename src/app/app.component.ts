import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
    {
      title: 'Loisirs',
      link: '/loisirs'
    }
  ];

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
