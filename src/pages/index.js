import { React, useState } from "react";
import TODOList from "@/components/TodoList";
import Form from "@/components/Form";
import styles from '@/styles/Home.module.css';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  return (
    <div className={styles.todoApp}>
      <h2 className={styles.title}>TODO LIST</h2>
      <Form setTodos={setTodos} filter={filter} setFilter={setFilter} />
      <TODOList todos={todos} setTodos={setTodos} filter={filter} />
    </div>
  );
}
