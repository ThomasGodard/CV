import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { CompetencesComponent } from './competences/competences.component';
import { ExperiencesProComponent } from './experiences-pro/experiences-pro.component';
import { FormationsComponent } from './formations/formations.component';
import { LoisirsComponent } from './loisirs/loisirs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AProposComponent,
    CompetencesComponent,
    ExperiencesProComponent,
    FormationsComponent,
    LoisirsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
