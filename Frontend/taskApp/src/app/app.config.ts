import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

// Import NgRx Store and Effects modules
import { provideStore } from '@ngrx/store'; // Use provideStore instead of StoreModule
import { provideEffects } from '@ngrx/effects'; // Use provideEffects instead of EffectsModule
import { taskReducer } from '../store/task.reducer'; // Import your task reducer
import { TaskEffects } from '../store/task.effects'; // Import your task effects
import { provideHttpClient } from '@angular/common/http'; // Import provideHttpClient

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    // Register the store using provideStore
    provideStore({ taskState: taskReducer }), // Register the reducer with provideStore
    provideEffects([TaskEffects]), // Register the effects with provideEffects
    provideHttpClient() // Add provideHttpClient here to enable HttpClient for the app
  ]
};
