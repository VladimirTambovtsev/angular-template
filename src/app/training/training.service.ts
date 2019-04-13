import { Subject } from 'rxjs/Subject';
import { Exercise } from './exercise.model';

export class TrainingService {
  exerciseChanged = new Subject<Exercise>();
  private availableExerices: Exercise[] = [
    { id: '1', name: 'Crunches', duration: 100, calories: 30 },
    { id: '2', name: 'Touch Toes', duration: 30, calories: 60 },
    { id: '3', name: 'Side Lunges', duration: 50, calories: 70 },
    { id: '4', name: 'Pull Ups', duration: 20, calories: 140 }
  ];

  private runningExercises: Exercise;
  private exercises: Exercise[] = [];

  get avaliableExercises() {
    return this.availableExerices.slice();
  }

  startExercise(selectedId: string) {
    this.runningExercises = this.availableExerices.find(
      ex => ex.id === selectedId
    );
    this.exerciseChanged.next({ ...this.runningExercises });
  }

  get getRunningExercise() {
    return { ...this.runningExercises };
  }

  completeExercise() {
    this.exercises.push({
      ...this.runningExercises,
      date: new Date(),
      state: 'completed'
    });
    this.runningExercises = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress: number) {
    this.exercises.push({
      ...this.runningExercises,
      duration: this.runningExercises.duration * (progress / 100),
      calories: this.runningExercises.duration * (progress / 100),
      date: new Date(),
      state: 'cancelled'
    });
    this.runningExercises = null;
    this.exerciseChanged.next(null);
  }
}
