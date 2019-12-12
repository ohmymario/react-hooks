import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import { TodosContext } from './contexts/todos.context';

const EditTodoForm = (props) => {
  const { dispatch } = useContext(TodosContext)
  const { id, task, toggleEditForm } = props;
  const [value, handleChange, reset] = useInputState(task)

  const submitForm = (e) => {
    e.preventDefault();
    dispatch({ type: 'EDIT', id: id, task: value })
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
