import { Injectable } from '@angular/core';
import { Exercise } from '../interface/exerciselist';

@Injectable({
  providedIn: 'root'
})
export class ExerciselistService {
  private exerciseList: Exercise[] = [];

  getExerciseList(): Exercise[] {
    return this.exerciseList;
  }

  addExercise(exercise: Exercise): void {
    this.exerciseList.push(exercise);
  }

  removeExercise(id: number): void {
    this.exerciseList = this.exerciseList.filter(exercise => exercise.id !== id);
  }
}
