import { Component } from '@angular/core';
import { generateWorkoutCardService } from '../generate-workout-card.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent {
   // Variables for the edit modal
  editModalOpen = false;
  editIndex = -1;

  // GenerateWorkoutCardService is injected into the constructor
  constructor(public generateWorkoutCardService: generateWorkoutCardService) {}

  
  // Getter for the workouts array from the generateWorkoutCardService
  get workouts() {
    return this.generateWorkoutCardService.workouts;
  }

   // Method to deletes a workout from the workouts array
  deleteWorkout(index: number) {
    this.generateWorkoutCardService.workouts.splice(index, 1);
  }

   // Method to opens the edit modal and sets the editIndex to the index of the workout to be edited
  openEditModal(index: number) {
    this.editModalOpen = true;
    this.editIndex = index;
  }
}
