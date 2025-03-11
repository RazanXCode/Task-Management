import { createReducer, on } from '@ngrx/store';
import { loadTasksSuccess, loadTasksFailure, addTaskSuccess, addTaskFailure, updateTaskSuccess, updateTaskFailure, deleteTaskSuccess, deleteTaskFailure } from './task.actions';


export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}


export interface TaskState {
  tasks: Task[];
  error: string | null;
}


export const initialState: TaskState = {
  tasks: [],
  error: null
};

export const taskReducer = createReducer(
  initialState,
  on(loadTasksSuccess, (state, { tasks }) => ({ ...state, tasks })),
  on(loadTasksFailure, (state, { error }) => ({ ...state, error })),
  on(addTaskSuccess, (state, { task }) => ({ ...state, tasks: [...state.tasks, task] })),
  on(addTaskFailure, (state, { error }) => ({ ...state, error })),
  on(updateTaskSuccess, (state, { task }) => ({
    ...state,
    tasks: state.tasks.map(t => (t.id === task.id ? task : t))
  })),
  on(updateTaskFailure, (state, { error }) => ({ ...state, error })),
  on(deleteTaskSuccess, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter(t => t.id !== id)
  })),
  on(deleteTaskFailure, (state, { error }) => ({ ...state, error }))
);
