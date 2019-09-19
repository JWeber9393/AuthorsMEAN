import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';


import { MainComponent } from './main/main.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';


const routes: Routes = [
  { path: 'create', component: CreateAuthorComponent},
  { path: 'edit/:id', component: EditAuthorComponent},
  { path: '', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
