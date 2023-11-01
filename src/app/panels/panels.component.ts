import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.css']
})
export class PanelsComponent {
  @Output() buildWorkout = new EventEmitter<void>();

  constructor(private router: Router) { }

  viewWorkouts() {
    this.router.navigate(['/workouts']);
  }
}
