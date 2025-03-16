export const ADD_TASK = 'ADD_TASK';
export const MOVE_TASK = 'MOVE_TASK';
export const SEARCH_TASKS = 'SEARCH_TASKS';
export const SET_LOADING = 'SET_LOADING';

export const addTask = (title, description) => ({
  type: ADD_TASK,
  payload: { title, description }
});

export const moveTask = (taskId, columnId) => ({
  type: MOVE_TASK,
  payload: { taskId, columnId }
});

/**
 * Filters tasks based on the search query.
 * Checks if the task title or description contains the query.
 * 
 * @param {string} query - The search query
 * @returns {Action} - Redux action to filter tasks
 */

export const searchTasks = (query) => ({
  type: SEARCH_TASKS,
  payload: query
});

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading
});
