import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserCardComponent} from "./user-card/user-card.component";
import {CreateFormComponent} from "./create-form/create-form.component";

const routes: Routes = [
  {path: '', component: UserCardComponent},
  {path: 'form', component: CreateFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
