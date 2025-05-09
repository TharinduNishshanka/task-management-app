
import express from 'express';
const router = express.Router();


router.post('/login', (req, res) => {
  
  res.json({ message: 'User logged in' });
});


router.post('/register', (req, res) => {
  
  res.json({ message: 'User registered' });
});


router.get('/logout', (req, res) => {
  
  req.logout();
  res.json({ message: 'User logged out' });
});

export default router;  
