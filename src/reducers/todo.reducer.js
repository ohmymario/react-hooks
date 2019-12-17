import uuid from 'uuid/v4'

const reducer = (state, action) => {
  const { type, id, task } = action;
  // Pass in the method to return
  switch (type) {
    case 'ADD':
      return [...state, { id: uuid(), task: task, completed: false }];
    case 'REMOVE':
      return state.filter(todo => todo.id !== id);
    case 'TOGGLE':
      return state.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    case 'EDIT':
      return state.map(todo => todo.id === id ? {...todo, task: task} : todo );
    default:
      return state;
  }
}

export default reducer;