# Employee Management System (EMS) – Full Stack Application

## Overview

This is a **Full Stack Employee Management System (EMS)** built using **React (Frontend)** and **Spring Boot (Backend)**. The application allows users to perform CRUD operations on employee records through a simple web interface.

The project demonstrates how a frontend application communicates with backend REST APIs.

## Tech Stack

### Frontend

* React
* JavaScript
* HTML5
* CSS3
* Axios

### Backend

* Spring Boot
* Java
* Spring Data JPA
* REST APIs
* Maven

### Database

* MySQL (or any relational database)

## Features

* Add a new employee
* View employee details
* Get employee by ID
* Update employee information
* Delete an employee
* REST API integration between React and Spring Boot
* Layered architecture (Controller → Service → Repository)

## API Endpoints

| Method | Endpoint            | Description           |
| ------ | ------------------- | --------------------- |
| POST   | /api/employees      | Create a new employee |
| GET    | /api/employees      | Get all employees     |
| GET    | /api/employees/{id} | Get employee by ID    |
| PUT    | /api/employees/{id} | Update employee       |
| DELETE | /api/employees/{id} | Delete employee       |

## Project Structure

```
ems-fullstack-app
│
├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   └── entity
│
└── frontend
    ├── components
    ├── services
    └── pages
```

## How to Run the Project

### Backend (Spring Boot)

Clone the repository and run:

```
mvn spring-boot:run
```

The backend server runs on:

```
http://localhost:8080
```

### Frontend (React)

Navigate to the frontend folder and run:

```
npm install
npm start
```

The frontend runs on:

```
http://localhost:3000
```

## Current Status

This project is **actively being developed**, and additional improvements such as UI enhancements and deployment will be added.

## Author

Pawan Kumar
