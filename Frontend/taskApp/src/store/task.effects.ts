import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TaskService } from '../app/task.service';
import { loadTasks,loadTasksSuccess, loadTasksFailure} from './task.actions';
import { Task } from './task.reducer'; 

@Injectable()

export class TaskEffects {

  loadTasks$ = createEffect(() => this.actions$.pipe(
    ofType(loadTasks), 
    mergeMap(() => this.taskService.getAllTasks().pipe(  
      map((tasks: Task[]) => loadTasksSuccess({ tasks })), 
      catchError((error) => {
        const errorMessage = error?.message || 'An error occurred while loading tasks';
        console.error(error); 
        return of(loadTasksFailure({ error: errorMessage })); 
      })
    ))
  ));

  constructor(
    private actions$: Actions,
    private taskService: TaskService
  ) {}
}
