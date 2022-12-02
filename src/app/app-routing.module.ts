import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageWithStepperComponent } from './page-with-stepper/page-with-stepper.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, 
  { path: 'page-with-stepper', component: PageWithStepperComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
