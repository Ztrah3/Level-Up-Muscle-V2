import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { WorkoutsComponent } from './workouts/workouts.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'workouts', component: WorkoutsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
