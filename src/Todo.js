import React from 'react';
import useToggleState from './hooks/useToggleState';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import EditTodoForm from './EditTodoForm';

const Todo = (props) => {

  const [ isEditing, toggle ] = useToggleState(false);
  const { id, task, completed, removeTodo, toggleTodo, editTodo } = props;

  return (
    <ListItem style={{height: '64px'}}>
      {isEditing ? <EditTodoForm toggleEditForm={toggle} task={task} id={id} editTodo={editTodo}/> :
        <>
          <Checkbox
            checked={completed}
            tabIndex={-1}
            onClick={() => toggleTodo(id)}
          />

          <ListItemText
            style={{ textDecoration: completed ? 'line-through' : 'none'}}
          >
            {task}
          </ListItemText>

          <ListItemSecondaryAction>

            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <DeleteIcon/>
            </IconButton>

            <IconButton aria-label="Edit" onClick={toggle}>
              <EditIcon/>
            </IconButton>

          </ListItemSecondaryAction>
        </>
      }
    </ListItem>
  )
}

export default Todo;
