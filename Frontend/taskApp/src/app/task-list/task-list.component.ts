import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../../store/task.reducer'; // Ensure correct path
import { selectAllTasks, selectError } from '../../store/task.selectors';
import { loadTasks, addTask, updateTask, deleteTask } from '../../store/task.actions';
import { TaskService } from '../task.service'; // Ensure correct path
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks$!: Observable<Task[]>;
  error$!: Observable<string | null>;
  newTask: Task = { id: 0, title: '', description: '', completed: false };
  editedTask: Task | null = null;

  constructor(private store: Store, private taskService: TaskService) {}

  ngOnInit() {
    this.loadAllTasks();
  }

  loadAllTasks() {
    this.tasks$ = this.taskService.getAllTasks().pipe(
      tap((tasks) => this.store.dispatch(loadTasks({ tasks })))
    );
    this.error$ = this.store.select(selectError);
  }

  addNewTask() {
    if (this.newTask.title.trim() && this.newTask.description.trim()) {
      this.tasks$ = this.taskService.addTask(this.newTask).pipe(
        tap((task) => this.store.dispatch(addTask({ task }))),
        switchMap(() => this.taskService.getAllTasks()), 
        tap((tasks) => this.store.dispatch(loadTasks({ tasks })))
      );
      this.newTask = { id: 0, title: '', description: '', completed: false }; 
    }
  }

  editTask(task: Task) {
    this.editedTask = { ...task };
  }

  saveEditedTask() {
    if (this.editedTask) {
      this.tasks$ = this.taskService.updateTask(this.editedTask).pipe(
        tap(() => this.store.dispatch(updateTask({ task: this.editedTask! }))),
        switchMap(() => this.taskService.getAllTasks()), 
        tap((tasks) => this.store.dispatch(loadTasks({ tasks })))
      );
      this.editedTask = null;
    }
  }

  cancelEdit() {
    this.editedTask = null;
  }

  toggleCompletion(task: Task) {
    const updatedTask = { ...task, completed: !task.completed };
    this.tasks$ = this.taskService.updateTask(updatedTask).pipe(
      tap(() => this.store.dispatch(updateTask({ task: updatedTask }))),
      switchMap(() => this.taskService.getAllTasks()), 
      tap((tasks) => this.store.dispatch(loadTasks({ tasks })))
    );
  }

  deleteTask(id: number) {
    this.tasks$ = this.taskService.deleteTask(id).pipe(
      tap(() => this.store.dispatch(deleteTask({ id }))),
      switchMap(() => this.taskService.getAllTasks()), 
      tap((tasks) => this.store.dispatch(loadTasks({ tasks })))
    );
  }
}
