import useLocalStorageState from './useLocalStorageState'
import uuid from 'uuid/v4';

export default initialTodos => {
  const [todos, setTodos] = useLocalStorageState('todos', initialTodos);

  return {
    todos,
    addTodo: newTodoText => {
      setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}])
    },
    removeTodo: id => {
      const updatedTodos = todos.filter(todo => id !== todo.id)
      setTodos(updatedTodos);
    },
    toggleTodo: todoId => {
      const updatedTodos = todos.map(todo => {
        if (todo.id === todoId) {
          return {...todo, completed: !todo.completed}
        }
        return todo
      })
      setTodos(updatedTodos);
    },
    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map(todo => {
        if (todo.id === todoId) {
          return {...todo, task: newTask}
        }
        return todo
      })
      setTodos(updatedTodos);
    }
  }
}
