import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  // Event emitters for the modal
  @Output() closeModal = new EventEmitter<void>();
  @Output() openModal = new EventEmitter<void>();
  @Output() generateWorkout = new EventEmitter<any>();

  // References to the input and select fields in the modal
  @ViewChild('workoutName') workoutName!: ElementRef;
  @ViewChild('muscleGroup') muscleGroup!: ElementRef;
  @ViewChild('workoutGoal') workoutGoal!: ElementRef;
  @ViewChild('cardio') cardio!: ElementRef;
  
  // Function to generate the workout
  generate() {
     // Emit the generateWorkout event with the values from the input and select fields
    this.generateWorkout.emit({
      workoutName: this.workoutName.nativeElement.value,
      muscleGroup: this.muscleGroup.nativeElement.value,
      workoutGoal: this.workoutGoal.nativeElement.value,
      cardio: this.cardio.nativeElement.value 
    });
    // Emit the closeModal event
    this.closeModal.emit();
     // Navigate to the workouts page
    this.router.navigate(['/workouts']);
  }

  // Constructor for the modal component
  constructor(private router: Router) { }

  ngOnInit() {
    // emit the openModal event
    this.openModal.emit();
  }

  // function to cancel the modal
  onCancel() {
     // Emit the closeModal event
    this.closeModal.emit();
  }
}
