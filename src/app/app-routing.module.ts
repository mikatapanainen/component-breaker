import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Test21Component } from './test21/test21.component';
import { Test22Component } from './test22/test22.component';


const routes: Routes = [
  { path: 'test21-component', component: Test21Component },
  { path: 'test22-component', component: Test22Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
