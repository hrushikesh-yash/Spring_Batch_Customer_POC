import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphicalComponent } from './Customer/graphical/graphical.component';
import { TabularComponent } from './Customer/tabular/tabular.component';
import { StudentComponent } from './student/student.component';

export const routes: Routes = [
  {path:'',component:TabularComponent},
  {path:'Tabular',component:TabularComponent},
  { path:'Graphical',component:GraphicalComponent},
  { path:'Testing',component:StudentComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
