import React from 'react';
import { TodoListItem } from './TodoListItem';

export class TodoList extends React.Component<any, any> {
  render() {
    const { filter, todos } = this.props;
    let filteredTodos: typeof todos = {};

    filteredTodos = todos.filter(todo => {
      const matchesActive = filter == 'active' && !todo.completed;
      const matchesCompleted = filter == 'completed' && todo.completed;
      
      return filter == 'all' || matchesActive || matchesCompleted; 
    })

    const TodoListItems = filteredTodos.map(todo => {
      return (
        <TodoListItem {...todo} />
      );
    })

    return (
      <ul className="todos">
        {TodoListItems}         
      </ul>
    );
  }
}
