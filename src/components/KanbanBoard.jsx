import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiPlus, FiSearch } from 'react-icons/fi';
import KanbanColumn from './KanbanColumn';
import AddTaskModal from './AddTaskModal';
import Toast from './Toast';
import { searchTasks } from '../store/actions';

/**
 * KanbanBoard.jsx
 * 
 * Main component that renders the Kanban board with all columns and tasks.
 * Manages the overall state and user interactions.
 * 
 * @author Padala Pavan Kumar Goud
 * @version 1.0.0
 */

const KanbanBoard = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [toast, setToast] = useState(null);
  
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  const columns = useSelector(state => state.columns);
  
  useEffect(() => {
    // Debounce search input
    const timer = setTimeout(() => {
      dispatch(searchTasks(searchQuery));
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchQuery, dispatch]);
  
  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };
  
  return (
    <div className="kanban-container">
      <div className="kanban-header">
        <h1 className="kanban-title">Task Management Board</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FiSearch className="search-icon" />
        </div>
      </div>
      
      <div className="kanban-board">
        {columns.map(column => (
          <KanbanColumn 
            key={column.id} 
            column={column}
            tasks={tasks.filter(task => 
              task.columnId === column.id && 
              (task.visible !== false)
            )}
            showToast={showToast}
          />
        ))}
      </div>
      
      <button 
        className="add-task-btn" 
        onClick={() => setShowModal(true)}
        aria-label="Add new task"
      >
        <FiPlus />
      </button>
      
      {showModal && (
        <AddTaskModal 
          onClose={() => setShowModal(false)} 
          showToast={showToast}
        />
      )}
      
      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
};

export default KanbanBoard;