const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  deadline: Date,
  assignedTo: String,
  status: { type: String, enum: ['Pending', 'In Progress', 'Done'], default: 'Pending' },
});
module.exports = mongoose.model('Task', TaskSchema);
