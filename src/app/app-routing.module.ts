import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { WorkoutsComponent } from './workouts/workouts.component';

// Defining the routes for the application
const routes: Routes = [
  // Default route that loads the HomePageComponent
  { path: '', component: HomePageComponent },
  // Route that loads the WorkoutsComponent
  { path: 'workouts', component: WorkoutsComponent }
];

// @NgModule decorator is used to define a module. 
// defines the routing module for the application
@NgModule({
  // The RouterModule.forRoot method is called with the routes defined above. 
  // This method returns a module that contains all the directives and services needed for routing
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
