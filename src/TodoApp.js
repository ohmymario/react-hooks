import React, {useState} from 'react';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import uuid from 'uuid/v4';

import TodoList from './TodoList';
import TodoForm from './TodoForm'

const TodoApp = () => {

  const initialTodos = [
    { id: 1, task: 'clean', completed: false },
    { id: 2, task: 'wash car', completed: true },
    { id: 3, task: 'clean', completed: false },
  ]

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = newTodoText => {
    setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}])
  }

  const removeTodo = id => {
    const updatedTodos = todos.filter(todo => id !== todo.id)
    setTodos(updatedTodos);
  }

  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return {...todo, completed: !todo.completed}
      }
      return todo
    })
    setTodos(updatedTodos);
  }

  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return {...todo, task: newTask}
      }
      return todo
    })
    setTodos(updatedTodos);
  }

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{ height: '64px'}}>
        <Toolbar>
          <Typography color='inherit'>TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>

      <Grid container justify='center' style={{marginTop: '1rem'}}>
        <Grid item xs={11} md={8} lg={4} >
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp;
