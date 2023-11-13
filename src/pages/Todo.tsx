import React, { useState, useEffect, KeyboardEvent } from 'react';
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Paper,
  Container,
  Checkbox,
  Typography,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import Navigation from '../components/Navigation';

interface Task {
  id: number;
  text: string;
  completed?: boolean;
}

function Todo() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  useEffect(() => {
    // Load todos from storage when the component mounts
    const storedTodos = localStorage.getItem('todos') || '[]';
    const parsedTodos = JSON.parse(storedTodos);
    setTasks(parsedTodos);
  }, []);

  const handleAddTask = () => {
    let updatedTodos = tasks;
    if (newTask.trim() !== '') {
      updatedTodos = [...tasks, { id: Date.now(), text: newTask, completed: false }];
      setTasks(updatedTodos);
      setNewTask('');
    }

    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    // Check if the Enter key is pressed
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  const handleDeleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleToggleCompleted = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task))
    );
  };

  const completedTasks = tasks.filter((task) => task.completed);
  const nonCompletedTasks = tasks.filter((task) => !task.completed);

  return (
    <Container>
      <Navigation />
      <Typography sx={{ mt: '20px' }} variant="h4" gutterBottom>
        Todo's App
      </Typography>
      <Paper elevation={3} sx={{ margin: '16px', padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Add a new task"
            variant="outlined"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            fullWidth
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <Button variant="contained" color="primary" onClick={handleAddTask} style={{ marginLeft: '8px' }}>
            Add
          </Button>
        </div>
      </Paper>

      <Typography sx={{ p: '10px' }} variant="h6">
        Non-Completed Tasks
      </Typography>
      <List>
        {nonCompletedTasks.map((task) => (
          <ListItem
            key={task.id}
            style={{
              backgroundColor: 'white',
              border: '1px solid #ccc',
              margin: '8px 0',
              padding: '8px',
              borderRadius: '4px',
            }}
          >
            <Checkbox checked={task.completed} onChange={() => handleToggleCompleted(task.id)} />
            <ListItemText primary={task.text} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(task.id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <Typography sx={{ p: '10px' }} variant="h6">
        Completed Tasks
      </Typography>
      <List>
        {completedTasks.map((task) => (
          <ListItem
            key={task.id}
            style={{
              backgroundColor: 'white',
              border: '1px solid #ccc',
              margin: '8px 0',
              padding: '8px',
              borderRadius: '4px',
              textDecoration: 'line-through',
            }}
          >
            <Checkbox checked={task.completed} onChange={() => handleToggleCompleted(task.id)} />
            <ListItemText primary={task.text} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(task.id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Todo;
