// File: README.md
# Kanban Board React Application

A modern Kanban board application built with React, Redux, and React DnD.

## Features

- Kanban board with four columns: To Do, In Progress, Peer Review, and Done
- Drag and drop functionality for easy task management
- Search functionality to filter tasks across all columns
- Add new tasks with title and description
- Responsive design for all screen sizes
- Persistent storage using localStorage
- Smooth animations and transitions
- Toast notifications for user feedback

## Tech Stack

- React
- Redux for state management
- React DnD for drag and drop functionality
- React Icons for UI icons
- LocalStorage for data persistence

## Setup and Installation

1. Clone the repository:
```bash
git clone https://github.com/PavanGoud547/kanban-board.git
cd kanban-board
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/         # React components
│   ├── KanbanBoard.jsx # Main board component
│   ├── KanbanColumn.jsx # Column component
│   ├── TaskCard.jsx    # Task card component
│   ├── AddTaskModal.jsx # Modal for adding tasks
│   └── Toast.jsx       # Toast notification component
├── store/              # Redux store setup
│   ├── index.js        # Store configuration
│   ├── actions.js      # Redux actions
│   ├── reducers.js     # Redux reducers
│   └── localStorage.js # Local storage utilities
├── App.jsx             # Main App component
├── App.css             # Main styles
└── index.js            # Application entry point
```

## Usage

- Add new tasks by clicking the floating "+" button
- Move tasks between columns by dragging and dropping
- Search for tasks using the search bar at the top
- Tasks are automatically saved to localStorage

## Customization

- Column colors can be modified in App.css (look for column-* classes)
- You can modify the initial tasks in src/store/reducers.js

## License

## Kanban Board Application Documentation

- https://drive.google.com/file/d/10fvDkf7ZP9U3-tEIL1TGhXSLxHW4v7X9/view?usp=sharing

MIT

// File: package.json
{
  "name": "kanban-board",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@reduxjs/toolkit": "^1.9.7",
    "react": "^18.2.0",
    "react-dnd": "^16.0.1",
    "react-dnd-html5-backend": "^16.0.1",
    "react-dom": "^18.2.0",
    "react-icons": "^4.12.0",
    "react-redux": "^8.1.3",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
