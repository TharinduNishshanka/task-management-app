
import express from 'express';
const router = express.Router();


router.get('/', (req, res) => {
  res.json({ message: 'This is the task route.' });
});


router.post('/', (req, res) => {
  const { title, description, deadline, assignedTo, status } = req.body;

  res.status(201).json({ message: 'Task added successfully!', task: { title, description, deadline, assignedTo, status } });
});


router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, deadline, assignedTo, status } = req.body;
  
  res.json({ message: `Task with ID ${id} updated!`, task: { title, description, deadline, assignedTo, status } });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  
  res.json({ message: `Task with ID ${id} deleted!` });
});

export default router; 
