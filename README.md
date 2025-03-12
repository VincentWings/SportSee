# SportSee - Analytics Dashboard  

[SportSee Website](https://sportsee-front-rust.vercel.app/)  

SportSee is a coaching analytics dashboard that allows users to track their workout sessions and calories burned. This project focuses on integrating dynamic data visualizations using React and fetching data from an API.  

## Features  

- **User Profile Page**: Displays key workout statistics such as session counts and calories burned.  
- **Data Visualization**: Integrates charts and graphs to present fitness analytics in an interactive way.  
- **Responsive Design**: Optimized for screens with a minimum resolution of 1024x780 pixels.  

## Technologies Used  

- **React**: Component-based frontend framework for building the user interface.  
- **Recharts**: Library used for rendering interactive data visualizations.  
- **Fetch API**: Handles HTTP requests to retrieve and process data from the backend.  
- **CSS**: Styles and layouts optimized for desktop, with a structured approach for future mobile implementation.  
- **JSDoc**: Used for code documentation to enhance project maintainability and collaboration.  

## Skills Demonstrated  

- **Frontend Development**: Implementing a structured React application with reusable components.  
- **API Integration**: Fetching, processing, and standardizing data from an external API.  
- **Data Visualization**: Creating advanced graphical elements using Recharts.  
- **Code Documentation**: Writing clear and structured JSDoc comments to improve readability and maintainability.  

## Installation & Usage  

### 1️⃣ Clone the project  
```bash  
git clone https://github.com/VincentWings/SportSee.git  
cd SportSee  
```  

### 2️⃣ Backend Installation  
```bash  
cd backend  
yarn
# Start the server  
yarn dev  
```  
The API will be available at [http://localhost:3000/](http://localhost:3000/)

### 3️⃣ Frontend Installation  
```bash  
cd frontend  
npm install  
# Start the React application  
npm run dev  
```  
The application will be accessible at [http://localhost:5174/](http://localhost:5174/)

## Backend API  

The API provides 4 endpoints:  

- `GET /user/:userId` → Fetches user information.  
- `GET /user/:userId/activity` → Fetches daily activity data.  
- `GET /user/:userId/average-sessions` → Fetches average session durations.  
- `GET /user/:userId/performance` → Fetches user performance metrics.  

## Error Handling  
- **API Unavailable** → Mocked data is used as a fallback. 
