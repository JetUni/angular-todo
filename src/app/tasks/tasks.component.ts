import { Component, OnInit } from '@angular/core';

import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];

  constructor(
    private taskService: TaskService,
  ) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
    .subscribe(tasks => this.tasks = tasks);
  }

  add(name: string, priority: number): void {
    name = name.trim();
    if (!name || !priority) { return; }
    this.taskService.addTask({ name: name, priority: priority, complete: false } as Task)
      .subscribe(task => {
        this.tasks.push(task);
      });
  }

  delete(task: Task): void {
    this.tasks = this.tasks.filter(t => t !== task);
    this.taskService.deleteTask(task).subscribe();
  }

  complete(task: Task, event: any): void {
    task.complete = event.target.checked;
    if(task.complete) {
      this.taskService.completeTask(task).subscribe();
    } else {
      this.taskService.incompleteTask(task).subscribe();
    }
  }

  save(task: Task): void {
    this.taskService.updateTask(task).subscribe();
  }

}
