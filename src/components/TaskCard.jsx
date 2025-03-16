import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { FiMenu, FiChevronRight } from 'react-icons/fi';
import { moveTask } from '../store/actions';

const TaskCard = ({ task }) => {
  const [showMoveOptions, setShowMoveOptions] = useState(false);
  const dispatch = useDispatch();
  const columns = useSelector(state => state.columns);
  
  // For desktop: Use react-dnd
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: {
      id: task.id,
      columnId: task.columnId
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  
  // Function to check if device is mobile
  const isMobile = () => {
    return window.innerWidth <= 768;
  };
  
  // For mobile: Move task with dropdown
  const handleMoveTask = (columnId) => {
    if (task.columnId !== columnId) {
      dispatch(moveTask(task.id, columnId));
      // Could add toast notification here
    }
    setShowMoveOptions(false);
  };
  
  return (
    <div
      ref={drag}
      className={`task-card ${isDragging ? 'is-dragging' : ''}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div className="task-title">{task.title}</div>
      <div className="task-description">{task.description}</div>
      
      {/* Mobile move options toggle */}
      {isMobile() && (
        <div className="mobile-controls">
          <button 
            className="move-task-btn"
            onClick={() => setShowMoveOptions(!showMoveOptions)}
            aria-label="Move task"
          >
            <FiChevronRight /> Move
          </button>
          
          {showMoveOptions && (
            <div className="move-options">
              {columns.map(column => (
                column.id !== task.columnId && (
                  <button
                    key={column.id}
                    className="move-option"
                    onClick={() => handleMoveTask(column.id)}
                  >
                    {column.title}
                  </button>
                )
              ))}
            </div>
          )}
        </div>
      )}
      
      {/* Desktop drag indicator */}
      {!isMobile() && (
        <div className="drag-indicator">
          <FiMenu />
        </div>
      )}
    </div>
  );
};

export default TaskCard;