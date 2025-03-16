import React from 'react';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { store } from './store';
import KanbanBoard from './components/KanbanBoard';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <div className="app-container">
          <KanbanBoard />
        </div>
      </DndProvider>
    </Provider>
  );
}

export default App;