import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import Todo from './Todo';

const TodoList = (props) => {

  const { todos, removeTodo, toggleTodo, editTodo } = props;

  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <>
            <Todo
            key={todo.id}
            {...todo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            />
            {i < todos.length - 1 && <Divider/>}
          </>
        ))}
      </List>
    </Paper>
  )
}

export default TodoList;
