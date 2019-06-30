import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { id: 1, name: 'Fix washing machine', priority: 1, complete: true },
      { id: 2, name: 'Change oil in Civic', priority: 2, complete: true },
      { id: 3, name: 'Change oil in Explorer', priority: 3, complete: true },
      { id: 4, name: 'Finish this app', priority: 1, complete: true },
      { id: 5, name: 'Call Amazon', priority: 2, complete: false },
      { id: 6, name: 'Connect MongoDB', priority: 3, complete: false },
      { id: 7, name: 'Be awesome', priority: 1, complete: true },
      { id: 8, name: 'Go skydiving', priority: 2, complete: false },
      { id: 9, name: 'Learn Java', priority: 3, complete: false },
    ];
    return {tasks};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
  }
}
