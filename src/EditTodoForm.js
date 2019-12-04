import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

const EditTodoForm = (props) => {
  const { id, task, editTodo, toggleEditForm } = props;
  const [value, handleChange, reset] = useInputState(task)

  const submitForm = (e) => {
    e.preventDefault();
    editTodo(id, value)
    reset();
    toggleEditForm();
  }

  return (
    <form
    style={{
      marginLeft: '1rem',
      width: '50%'
    }}
    onSubmit={submitForm}>
      <TextField
        margin='normal'
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  )
}

export default EditTodoForm;
