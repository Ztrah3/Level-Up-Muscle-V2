import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.css']
})
export class WorkoutCardComponent {
  // Workout data passed into the component
  @Input() workout: any;
   // Event that can be emitted when the workout is deleted
  @Output() delete = new EventEmitter<void>();

  // Method to emits the 'delete' event
  deleteWorkout() {
    this.delete.emit();
  }
}
