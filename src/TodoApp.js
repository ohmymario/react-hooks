import React, {useState} from 'react';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

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
    setTodos([...todos, {id: 4, task: 'fasd', completed: true}])
  }

  const setCompletion = (id, status) => {
    console.log(id, status)
  }

  const removeTodo = id => {
    // Filter out the removed todo
    const updatedTodos = todos.filter(todo => id !== todo.id)
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
          <TodoList todos={todos} removeTodo={removeTodo}/>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp;
