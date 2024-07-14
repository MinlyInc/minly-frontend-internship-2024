import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import styles from '@/styles/Form.module.css';

const Form = ({ setTodos, filter, setFilter }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.todo.value;
    setTodos((prevTodos) => [
      ...prevTodos, 
      { title: value, date: new Date().toLocaleString(), is_completed: false, id: crypto.randomUUID() }
    ]);
    event.target.reset();
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button type="submit" className={styles.addButton}>
        Add Task
      </button>
      <div className={styles.inputContainer}>
        <label htmlFor="todo">
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="Write your next task"
            className={styles.input}
          />
        </label>
      </div>
      <FormControl className={styles.filterControl}>
        <Select
          labelId="filter-label"
          value={filter}
          label="Filter"
          onChange={handleFilterChange}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
          <MenuItem value="incomplete">Incomplete</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
};

export default Form;
