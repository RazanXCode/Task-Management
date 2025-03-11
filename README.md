# Task Management Application
## Description
This is a Task Management Application built using Angular for the frontend and microservices for the backend. It uses NgRx for state management to manage the tasks.

## Features:
Display tasks in a list with options to add, edit, and delete tasks.
State management with NgRx.
Interaction with a backend API to perform CRUD operations on tasks.

## Prerequisites:
Before setting up the application, ensure that you have the following installed:
Node.js 
Angular CLI 
.NET 5/6/7 SDK 
SQL Server 

## Setting up the Microservices
This app communicates with the backend Task Microservice built using ASP.NET Core. The backend exposes RESTful API endpoints for managing tasks.

Step 1: Clone the backend repository

git clone https://github.com/your-repository/task-service.git
cd task-service

Step 2: Install dependencies and build

dotnet restore

dotnet build


Step 3: Configure the database
Ensure that the database is properly set up and accessible by the backend. You can use SQL Server or any other database compatible with Entity Framework Core.


Step 4: Run the backend
dotnet run 

## How NgRx is integrated in this app:
1. task.actions.ts: Defines all the actions for managing tasks (e.g., load tasks, add tasks).
2. task.reducer.ts: Contains the reducer to manage the tasks state.
3. task.effects.ts: Handles side effects like API requests for task CRUD operations.
4. task.selectors.ts: Contains selectors for accessing specific parts of the state, like fetching tasks.
