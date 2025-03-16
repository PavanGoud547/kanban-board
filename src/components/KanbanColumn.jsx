import React from 'react';
import TaskCard from './TaskCard';
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { moveTask } from '../store/actions';

/**
 * Renders a single column in the Kanban board.
 * Handles the drop target functionality for tasks.
 * 
 * @param {Object} props - Component props
 * @param {Object} props.column - Column data (id, title)
 * @param {Array} props.tasks - Tasks that belong to this column
 * @param {Function} props.showToast - Function to display toast notifications
 * @returns {JSX.Element} - Rendered column component
 */

const KanbanColumn = ({ column, tasks, showToast }) => {
  const dispatch = useDispatch();
  
  // Set up the drop target for tasks

  const [{ isOver }, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => {
          // Only dispatch the action if the task is actually moving to a new column
      if (item.columnId !== column.id) {
        dispatch(moveTask(item.id, column.id));
        showToast(`Task moved to ${column.title}`, 'success');
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  
  const getColumnClassName = () => {
    let className = "kanban-column";
    
    switch(column.id) {
      case 'todo':
        className += " column-todo";
        break;
      case 'inProgress':
        className += " column-inprogress";
        break;
      case 'review':
        className += " column-review";
        break;
      case 'done':
        className += " column-done";
        break;
      default:
        break;
    }
    
    if (isOver) {
      className += " is-over";
    }
    
    return className;
  };
  
  return (
    <div 
      ref={drop} 
      className={getColumnClassName()}
      style={{ backgroundColor: isOver ? '#f0f7ff' : '#ebecf0' }}
    >
      <div className="column-header">
        <div className="column-title">{column.title}</div>
        <div className="task-count">{tasks.length}</div>
      </div>
      
      <div className="tasks-container">
        {tasks.length > 0 ? (
          tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))
        ) : (
          <div className="empty-column">
            {column.id === 'todo' 
              ? 'Click + to add tasks' 
              : 'Drag tasks here'}
          </div>
        )}
      </div>
    </div>
  );
};

export default KanbanColumn;