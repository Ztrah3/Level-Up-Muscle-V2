import { Injectable } from '@angular/core';

// Injectable, meaning this service can be used in any part of the app
@Injectable({
  providedIn: 'root'
})
export class generateWorkoutCardService {
  // Dictionary for compound exercises for each muscle group
  componentExercises: { [key: string]: string[] } = { 
    chest: ["Bench press (barbell or dumbbell)", "Incline bench press (barbell  or dumbbell)", "Decline bench press (barbell or dumbbell)", "Push ups", "Incline Push ups", "Decline Push ups"
    , "close grip bench press (barbell or dumbbell)", "Floor press (barbell or dumbbell)", "Landmine press", "Incline chest press machine", "Decline chest press machine", "chest press machine", "Chest dips",], 
    triceps: ["Barbell skull crushers", "Overhead barbell tricep extensions", "Cable tricep push down", "Dumbbell tricep kickbacks", "Tricep Dips", "Machine tricep Dips"], 
    biceps: ["Neutral-grip barbell curls", "Close-grip barbell curls", "Wide-grip barbell curls", "Machine curls", "Alternating dumbbell curls", "Alternating supinating dumbbell curls", 
    "Hammer curls", "Concentration curls", "Spider curls", 
    "Barbell preacher curls", "Dumbbell preacher curls"], 
    back: ["Bent over barbell rows", "T-bar rows", "Pull-ups", "Close-grip seated cable rows", "Wide-grip seated cable rows", "Straight arm pull downs", "Dumbbell shoulder shrugs", 
    "Barbell shoulder shrugs", "Close-grip front lat pulldown", "Wide-grip front lat pulldown", "Rack pulls", "Rope pullover",], 
    legs: ["Back Squats", "Split squats", "Romanian deadlifts", "Leg press machine", "Goblet squats", "Front squat", "Walking lungs","Reverse lungs", "Barbell hip thrusts", "Deadlifts", "Barbell hack squats", "Side lungs"], 
    core: ["Planks", "Russian twists", "Bicycle crunches", "Sit ups", "Lying leg raises", "Mountain climbers", "Oblique crunches"],
    cardio: ["Treadmill", "Stairmaster", "Jump rope", "Row machine", "Shadow boxing", "Elliptical", "Stationary bike"],
    shoulders: ["Seated barebell shoulder press", "Arnold press", "Seated dumbbell shoulder press", "Military press", "Half kneeling landmine press", "Smith machine press", "Machine shoulder press"] };
  // Dictionary for isolated exercises for each muscle group
  isolatedExercises: { [key: string]: string[] } = { 
    chest: ["Dumbbell flyes", "Incline dumbbell flyes", "Decline dumbbell flyes", "Cable flyes", "Incline cable flyes", "Decline cable flyes", "Chest pullovers", "Pec deck machine",], 
    triceps: ["Dumbbell skull crushers", "Overhead Dumbbell tricep extensions", "Cable tricep push down", "Single arm cable tricep push down"], 
    biceps: ["Reverse barbell curls", "Cable curls", "Single-arm cable curls", "Overhead cable curls", "Seated incline dumbbell curls", "Seated hammer curls"], 
    back: ["Bent over dumbbell rows", "Roman chair back extensions", "Inverted rows", "Meadows rows", "Bent over dumbbell rows"], 
    legs: ["Calf raises", "Leg curls", "Leg extensions", "Donkey kicks", "Single-leg cable kick backs"], 
    core: ["Flutter kicks", "Hanging leg raises", "Hollow body hold", "V-sits", "ab rollouts", "Cable crunches"],
    shoulders: ["Lateral raise", "Reverse flye", "Front raise", "Cable lateral raise", "Face pulls", "Cable front raise"]  };
      
    // Array that hold the generated workouts
    workouts: { name: string, exercises: string[], workoutGoal?: string, cardio?: string }[] = [];

    // Method to generates a workout based on provided parameters
    generate(workoutName: string, muscleGroup: string, workoutGoal: string, cardio: string) {
      // Check if the maximum number of workouts has been reached
      if (this.workouts.length < 20) {
        // Initialize arrays for compound and isolated exercises
        let compoundExercises = [];
        let isolatedExercises = [];
        // Populate the exercise arrays based on the muscle group
        switch(muscleGroup) {
          case 'Chest + Triceps':
            compoundExercises = [
              ...this.getRandomExercises(this.componentExercises['chest'], 3),
              ...this.getRandomExercises(this.componentExercises['triceps'], 2)
            ];
            isolatedExercises = [
              ...this.getRandomExercises(this.isolatedExercises['chest'], 2),
              ...this.getRandomExercises(this.isolatedExercises['triceps'], 1)
            ];
            break;
          case 'Shoulders + Triceps':
            compoundExercises = [
              ...this.getRandomExercises(this.componentExercises['shoulders'], 3),
              ...this.getRandomExercises(this.componentExercises['triceps'], 2)
            ];
            isolatedExercises = [
              ...this.getRandomExercises(this.isolatedExercises['shoulders'], 2),
              ...this.getRandomExercises(this.isolatedExercises['triceps'], 1)
            ];
            break;
          case 'Back + Biceps':
            compoundExercises = [
              ...this.getRandomExercises(this.componentExercises['back'], 3),
              ...this.getRandomExercises(this.componentExercises['biceps'], 2)
            ];
            isolatedExercises = [
              ...this.getRandomExercises(this.isolatedExercises['back'], 2),
              ...this.getRandomExercises(this.isolatedExercises['biceps'], 1)
            ];
            break;
          case 'Legs + Core':
            compoundExercises = [
              ...this.getRandomExercises(this.componentExercises['legs'], 3),
              ...this.getRandomExercises(this.componentExercises['core'], 2)
            ];
            isolatedExercises = [
              ...this.getRandomExercises(this.isolatedExercises['legs'], 2),
              ...this.getRandomExercises(this.isolatedExercises['core'], 1)
            ];
            break;
          case 'Biceps + Triceps':
            compoundExercises = [
              ...this.getRandomExercises(this.componentExercises['biceps'], 3),
              ...this.getRandomExercises(this.componentExercises['triceps'], 2)
            ];
            isolatedExercises = [
              ...this.getRandomExercises(this.isolatedExercises['biceps'], 2),
              ...this.getRandomExercises(this.isolatedExercises['triceps'], 1)
            ];
            break;
          default:
            compoundExercises = this.getRandomExercises(this.componentExercises[muscleGroup.toLowerCase()], 3);
            isolatedExercises = this.getRandomExercises(this.isolatedExercises[muscleGroup.toLowerCase()], 3);
        }
        // Initialize prefix for sets and reps
        let prefix = '';
        // Determine the prefix based on the workout goal
        switch(workoutGoal) {
          case 'Increase Muscle':
            prefix = ' - 4 sets x 8-12 reps ';
            break;
          case 'Increase Strength':
            prefix = ' - 4 sets x 6-8 reps ';
            break;
          case 'Lean up':
            prefix = ' - 4 sets x 12-15 reps ';
            break;
        }
        // Create a new workout object with the provided name, goal, and cardio preference
        // and the generated list of exercises
        const workout = {
          name: workoutName,
          exercises: [...compoundExercises, ...isolatedExercises].map(exercise => exercise + prefix),
          workoutGoal: workoutGoal,
          cardio: cardio
        };
         // If cardio is 'Yes', add a cardio exercise to the workout
        if (cardio === 'Yes') {
          const cardioExercise = this.getRandomExercises(this.componentExercises['cardio'], 1);
          workout.exercises.push(...cardioExercise);
        }
        
        // Add the new workout to the list of workouts
        this.workouts.push(workout);
      } else {
        console.log('You have reached the maximum number of workout cards.');
      }
    }
    // Method to return a specified number of random exercises from a given array
    getRandomExercises(exercises: string[], count: number): string[] {
      if (!exercises) {
        return [];
      }
      return this.shuffleArray(exercises).slice(0, count);
    }
  // Method that shuffles an array in place
  shuffleArray(array: any[]): any[] {
    for (let i = array?.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  // The constructor is empty, meaning no dependencies are being injected into this service
  constructor() { }
}
