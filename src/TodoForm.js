import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import useInputState from './hooks/useInputState';

const TodoForm = ({addTodo}) => {
  const [value, handleChange, reset] = useInputState('');

  const submitForm = e => {
    e.preventDefault();
    addTodo(value);
    reset();
  }
  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form onSubmit={submitForm}>
        <TextField
          value={value}
          onChange={handleChange}
          margin='normal'
          label='Add New Todo'
          fullWidth
        />
      </form>
    </Paper>
  )
}

export default TodoForm;
