import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ModalComponent } from './modal/modal.component';
import { PanelsComponent } from './panels/panels.component';
import { TitleComponent } from './title/title.component';
import { WorkoutCardComponent } from './workout-card/workout-card.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ModalComponent,
    PanelsComponent,
    TitleComponent,
    WorkoutCardComponent,
    WorkoutsComponent,
    ProductTableComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
