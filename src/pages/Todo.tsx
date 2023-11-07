import React, { useState } from 'react';
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Paper,
} from '@mui/material';
import { Delete } from '@mui/icons-material';

interface Task {
  id: number;
  text: string;
}

function Todo() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <Paper elevation={3}>
        <TextField
          label="Add a new task"
          variant="outlined"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleAddTask}>
          Add
        </Button>
      </Paper>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <ListItemText primary={task.text} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(task.id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Todo;
