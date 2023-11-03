import { Component, ElementRef, Renderer2 } from '@angular/core';
import { generateWorkoutCardService } from '../generate-workout-card.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  showModal = false;

  
  constructor(private generateWorkoutCardService: generateWorkoutCardService, private renderer: Renderer2, private elRef: ElementRef) {}

  onGenerateWorkout(event: any) {
    this.generateWorkoutCardService.generate(event.workoutName, event.muscleGroup, event.workoutGoal, event.cardio);
  }

  onOpenModal() {
    this.renderer.addClass(this.elRef.nativeElement.ownerDocument.body, 'modal-open');
  }

  onCloseModal() {
    this.renderer.removeClass(this.elRef.nativeElement.ownerDocument.body, 'modal-open');
    this.showModal = false;
  }
}
