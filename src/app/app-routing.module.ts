import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AProposComponent} from "./a-propos/a-propos.component";
import {CompetencesComponent} from "./competences/competences.component";
import {ExperiencesProComponent} from "./experiences-pro/experiences-pro.component";
import {FormationsComponent} from "./formations/formations.component";
import {LoisirsComponent} from "./loisirs/loisirs.component";

const routes: Routes = [
  {path: '' , component: AProposComponent},
  {path: 'competences', component: CompetencesComponent},
  {path: 'experience-pro', component: ExperiencesProComponent},
  {path: 'formations', component: FormationsComponent},
  {path: 'loisirs', component: LoisirsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
