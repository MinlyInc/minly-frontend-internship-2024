import { ToDoCard } from "../components/to-do/to-do-card";
import { useState } from "react";
import { Box, Button, InputLabel, Select, MenuItem } from "@mui/material";

export default function Home() {
  const [titles, setTitles] = useState([
    { id: 1, title: 'Create a react project', isChecked: false, type:'Education' },
    { id: 2, title: 'Learn React', isChecked: false },
    { id: 3, title: 'Create a Todo App', isChecked: false },
  ]);
  const [filter, setFilter] = useState("All");

  const updateTitle = (id, newTitle) => {
    setTitles((prevTitles) =>
      prevTitles.map((item) => (item.id === id ? { ...item, title: newTitle } : item))
    );
  };

  const handleDelete = (id) => {
    const tempData = titles.filter(item => item.id !== id);
    setTitles(tempData);
  };

  const handleAddTask = () => {
    const newTask = { id: titles.length + 1, title: '', isChecked: false, editMode: true };
    setTitles([...titles, newTask]);
  };

  const updateChecked = (id, isChecked) => {
    setTitles((prevTitles) =>
      prevTitles.map((item) => (item.id === id ? { ...item, isChecked: isChecked } : item))
    );
  };

  const filteredTitles = titles.filter((item) => {
    if (filter === "All") return true;
    if (filter === "Done") return item.isChecked;
    if (filter === "In Progress") return !item.isChecked;
    return true;
  });

  return (
    <Box>
      <Box display="flex" mb={2}>
        <Button variant="contained" onClick={handleAddTask}>Add Task</Button>
        <InputLabel id="filter-label">Filter</InputLabel>
        <Select
          labelId="filter-label"
          id="filter-select"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Done">Done</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
        </Select>
      </Box>
      {filteredTitles.map((item) => (
        <ToDoCard
          key={item.id}
          id={item.id}
          title={item.title}
          isChecked={item.isChecked}
          updateTitle={updateTitle}
          handleDelete={handleDelete}
          updateChecked={updateChecked}
          editMode={item.editMode}
        />
      ))}
    </Box>
  );
}
