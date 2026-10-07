# FLIXHIRE
AI Creator Marketplace — full-stack hackathon demo.

## Requirements
Java 17+, Maven 3.9+, browser.

## Backend
cd backend
mvn spring-boot:run

Runs at http://localhost:8080

Health: http://localhost:8080/api/health

## Frontend
From the frontend folder:
python -m http.server 5173

Open http://localhost:5173

## APIs
GET /api/creators
GET /api/creators/{id}
GET /api/health

Examples:
GET /api/creators?tool=Kling
GET /api/creators?specialization=AI%20Filmmaking&format=Video
GET /api/creators?sort=rating
GET /api/creators?search=Midjourney

Creator data is demo/in-memory data for hackathon evaluation.
