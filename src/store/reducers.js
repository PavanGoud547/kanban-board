import { combineReducers } from 'redux';
import { 
  ADD_TASK, 
  MOVE_TASK, 
  SEARCH_TASKS, 
  SET_LOADING 
} from './actions';

const initialColumns = [
  { id: 'todo', title: 'To Do' },
  { id: 'inProgress', title: 'In Progress' },
  { id: 'review', title: 'Peer Review' },
  { id: 'done', title: 'Done' }
];

const initialTasks = [
  {
    id: '1',
    title: 'Create UI design for dashboard',
    description: 'Design a modern UI for the main dashboard with charts and key metrics. Include mobile responsive layout.',
    columnId: 'todo',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Implement authentication flow',
    description: 'Add user login, registration, and password reset functionality with JWT tokens.',
    columnId: 'inProgress',
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    title: 'Write unit tests for API endpoints',
    description: 'Create comprehensive test suite for all REST API endpoints using Jest.',
    columnId: 'review',
    createdAt: new Date().toISOString()
  },
  {
    id: '4',
    title: 'Deploy application to production',
    description: 'Set up CI/CD pipeline and deploy the application to the production environment.',
    columnId: 'done',
    createdAt: new Date().toISOString()
  }
];

const columnsReducer = (state = initialColumns, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const tasksReducer = (state = initialTasks, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: Date.now().toString(),
          title: action.payload.title,
          description: action.payload.description,
          columnId: 'todo', // New tasks always go to the "To Do" column
          createdAt: new Date().toISOString()
        }
      ];
      
    case MOVE_TASK:
      return state.map(task => 
        task.id === action.payload.taskId
          ? { ...task, columnId: action.payload.columnId }
          : task
      );
      
    case SEARCH_TASKS:
      const query = action.payload.toLowerCase();
      
      if (!query) {
        return state.map(task => ({ ...task, visible: true }));
      }
      
      return state.map(task => ({
        ...task,
        visible: 
          task.title.toLowerCase().includes(query) || 
          task.description.toLowerCase().includes(query)
      }));
      
    default:
      return state;
  }
};

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  columns: columnsReducer,
  tasks: tasksReducer,
  loading: loadingReducer
});