import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PuntoAComponent } from "./components/punto-a/punto-a.component"; 
import { PuntoBComponent } from "./components/punto-b/punto-b.component"; 
import { PuntoCComponent } from "./components/punto-c/punto-c.component"; 
import { PuntoDComponent } from "./components/punto-d/punto-d.component"; 

const routes: Routes = [
  { path: 'puntoA', component: PuntoAComponent },     
  { path: 'puntoB', component: PuntoBComponent },     
  { path: 'puntoC', component: PuntoCComponent },
  { path: 'puntoD', component: PuntoDComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
