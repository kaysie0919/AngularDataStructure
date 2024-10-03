import { Component } from '@angular/core';

@Component({
  selector: 'app-exerciselist',
  templateUrl: './exerciselist.component.html',
  styleUrl: './exerciselist.component.css'
})
export class ExerciselistComponent {
  exercise: string = '';
  exerciseList: string[] = ['Push-ups', 'Squats', 'Lunges'];

  addExercise() {
    if (this.exercise.trim()) {
      this.exerciseList.push(this.exercise.trim());
      this.exercise = '';
    }
  }

}
