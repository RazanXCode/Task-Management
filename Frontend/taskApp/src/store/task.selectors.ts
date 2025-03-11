import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState } from './task.reducer'; // Import TaskState interface

// Select the Task feature state
export const selectTaskState = createFeatureSelector<TaskState>('tasks');

// Selector to get all tasks
export const selectAllTasks = createSelector(
  selectTaskState,
  (state: TaskState) => state.tasks
);

// Selector to get error state
export const selectError = createSelector(
  selectTaskState,
  (state: TaskState) => state.error
);
