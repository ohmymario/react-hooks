import React, { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todo.reducer';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
  {id: 1, task: 'mow the lawn', completed: false },
  {id: 2, task: 'make dinner', completed: false }
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos)
  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  )
}