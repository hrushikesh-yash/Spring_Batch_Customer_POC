import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphicalComponent } from './Customer/graphical/graphical.component';
import { TabularComponent } from './Customer/tabular/tabular.component';

const routes: Routes = [
  {path:'',component:TabularComponent},
  {path:'Tabular',component:TabularComponent},
  { path:'Graphical',component:GraphicalComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
