# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Dialux Clone - Lighting Design Tool
Project Overview
This project is a web-based clone of the Dialux lighting design tool. It allows users to create, visualize, and simulate lighting designs for indoor and outdoor spaces. Users can adjust light sources, experiment with materials, and export lighting designs. The system is built using React, Three.js (for 3D rendering), and Node.js for backend functionalities.

Technologies Used
Database: MongoDB, Mongoose
Frontend: React, Bootstrap
3D Rendering: Three.js
Version Control: Git, GitHub
Features
Create and save lighting designs
3D visualization of lighting setups
Adjust light intensities, materials, and colors
Export designs in image and PDF formats
User authentication for saving projects
Installation and Setup
Clone the Repository this is the clone link given below 

git clone https://github.com/yourusername/Dialux-Clone.git
cd Dialux-Clone

Install Dependencies run below code it will install all used dependencies automatically
npm install
Configure Environment Variables
Create a .env file and add the following details:
.env file contails you sensetive information like API keys Access Keys PORT and Database string
PORT=5000
MONGO_URI=your_mongodb_connection_string
Start the Server

npm start
The application will run at http://localhost:3000


