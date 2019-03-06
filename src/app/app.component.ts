import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menus = [
    {
      title: 'A Propos',
      link: ''
    },
    {
      title: 'Competences',
      link: 'competences'
    },
    {
      title: 'Expériences Professionnelles',
      link: 'experience-pro'
    },
    {
      title: 'Formations',
      link: 'formations'
    },
    {
      title: 'Loisirs',
      link: 'loisirs'
    }
  ];

  selectedMenu: string = this.menus[0].title;

  setSelectedMenu(menu: any): void {
    this.selectedMenu = menu.title;
  }
}
