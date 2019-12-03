import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const Todo = (props) => {

  const { task, completed, removeTodo, id } = props;

  return (
    <ListItem>

      <Checkbox checked={completed} tabIndex={-1}/>

      <ListItemText
        style={{ textDecoration: completed ? 'line-through' : 'none'}}
      >
        {task}
      </ListItemText>

      <ListItemSecondaryAction>

        <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
          <DeleteIcon/>
        </IconButton>

        <IconButton aria-label="Edit">
          <EditIcon/>
        </IconButton>

      </ListItemSecondaryAction>

    </ListItem>
  )
}

export default Todo;
