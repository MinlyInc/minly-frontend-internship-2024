import { React } from "react";
import Item from "@/components/Item";
import styles from '@/styles/TODOList.module.css';

const TODOList = ({ todos, setTodos, filter }) => {
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.is_completed;
    if (filter === 'incomplete') return !todo.is_completed;
    return true;
  });

  return (
    <div className={styles.todoList}>
      {filteredTodos.length > 0 ? (
        filteredTodos.map((item, index) => (
          <Item key={index} item={item} setTodos={setTodos} />
        ))
      ) : (
        <p>No tasks found</p>
      )}
    </div>
  );
};

export default TODOList;
