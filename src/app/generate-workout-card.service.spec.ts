import { TestBed } from '@angular/core/testing';

import { GenerateWorkoutCardService } from './generate-workout-card.service';

describe('GenerateWorkoutCardService', () => {
  let service: GenerateWorkoutCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateWorkoutCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
