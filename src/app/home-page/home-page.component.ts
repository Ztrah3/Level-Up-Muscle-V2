import { Component, ElementRef, Renderer2 } from '@angular/core';
import { generateWorkoutCardService } from '../generate-workout-card.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
    // Variable for the modal
  showModal = false;

  // generateWorkoutCardService, Renderer2, and ElementRef are injected into the constructor
  constructor(private generateWorkoutCardService: generateWorkoutCardService, private renderer: Renderer2, private elRef: ElementRef) {}
  
  // Method to generate a workout using the generateWorkoutCardService
  onGenerateWorkout(event: any) {
    this.generateWorkoutCardService.generate(event.workoutName, event.muscleGroup, event.workoutGoal, event.cardio);
  }

    // Method to open the modal and adds the 'modal-open' class to the body
  onOpenModal() {
    this.renderer.addClass(this.elRef.nativeElement.ownerDocument.body, 'modal-open');
  }

    // Method to close the modal and removes the 'modal-open' class from the body
  onCloseModal() {
    this.renderer.removeClass(this.elRef.nativeElement.ownerDocument.body, 'modal-open');
    this.showModal = false;
  }
}
