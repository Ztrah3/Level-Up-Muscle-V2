import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.css']
})
export class PanelsComponent {
  // Creating an instance of EventEmitter allowing the component to emit custom events
  // 'buildWorkout' can be emitted now
  @Output() buildWorkout = new EventEmitter<void>();

   // Injecting the Router into the constructor for route navigation
  constructor(private router: Router) { }
  
  // Method to navigate to the '/workouts' route when called
  viewWorkouts() {
    this.router.navigate(['/workouts']);
  }
}
