import { Component } from '@angular/core';
import { ExerciselistService } from '../services/exerciselist.service';
import { Exercise } from '../interface/exerciselist';

@Component({
  selector: 'app-exerciselist',
  templateUrl: './exerciselist.component.html',
  styleUrls: ['./exerciselist.component.css']
})
export class ExerciselistComponent {
  exercise: string = '';
  exerciseList: Exercise[] = [];
  nextId: number = 1;

  constructor(private exerciseService: ExerciselistService) {
    this.exerciseList = this.exerciseService.getExerciseList();
  }

  addExercise() {
    if (this.exercise.trim()) {
      const newExercise: Exercise = { id: this.nextId++, name: this.exercise.trim() };
      this.exerciseService.addExercise(newExercise);
      this.updateExerciseList();
      this.exercise = '';
    }
  }

  removeExercise(id: number) {
    this.exerciseService.removeExercise(id);
    this.updateExerciseList();
  }

  private updateExerciseList() {
    this.exerciseList = this.exerciseService.getExerciseList();
  }
}
