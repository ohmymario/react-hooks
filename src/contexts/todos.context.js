import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
  {id: 1, task: 'mow the lawn', completed: false },
  {id: 2, task: 'make dinner', completed: false }
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  const todosObject = useTodoState(defaultTodos)
  return (
    <TodosContext.Provider value={todosObject}>
      {props.children}
    </TodosContext.Provider>
  )
}