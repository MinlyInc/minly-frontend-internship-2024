import {React, useState, useEffect, useRef} from "react";
import styles from '@/styles/Item.module.css';

const Item = ({ item, setTodos }) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);

  const completeTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id ? { ...todo, is_completed: !todo.is_completed } : todo
      )
    );
  };

  const handleDelete = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id));
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    setEditing(false);
  };

  const handleInputBlur = () => {
    setEditing(false);
  };

  const handleInputChange = (e) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id ? { ...todo, title: e.target.value } : todo
      )
    );
  };

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
    }
  }, [editing]);

  return (
    <div id={item.id} className={styles.todoItem}>
      <div className={styles.todoItemContent}>
        <input type="checkbox" checked={item.is_completed} onChange={completeTodo} />
        {editing ? (
          
          <form onSubmit={handleInputSubmit} className={styles.editForm}>
            <input
              ref={inputRef}
              type="text"
              value={item.title}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              className={styles.editInput}
            />
          </form>
        ) : (
          <>
            <span className={item.is_completed ? styles.completed : ''}>{item.title}</span>
            <span className={styles.date}>{item.date}</span>
          </>
        )}
      </div>
      <div className={styles.actions}>
        <button onClick={handleEdit} className={styles.editButton}>✏️</button>
        <button onClick={handleDelete} className={styles.deleteButton}>🗑️</button>
      </div>
    </div>
  );
};

export default Item;
