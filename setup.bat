@echo off

echo Setting up project directories...

REM Create project structure
mkdir project-root
cd project-root

REM Backend setup
mkdir backend
cd backend
npm init -y
npm install express mongoose dotenv cors body-parser
mkdir models routes config
echo > app.js
cd ..

REM Frontend setup
npx create-react-app frontend

echo Project structure created successfully.
pause
