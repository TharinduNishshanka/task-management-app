import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/tasks', { credentials: 'include' })
      .then(res => res.json()).then(setTasks);
  }, []);

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text('Task Report', 10, 10);
    tasks.forEach((task, i) => {
      doc.text(`${i + 1}. ${task.title} - ${task.status}`, 10, 20 + i * 10);
    });
    doc.save('tasks.pdf');
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">All Tasks</h2>
      <button onClick={handleDownload} className="bg-green-500 text-white px-4 py-2 rounded mb-4">Download PDF</button>
      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task._id}>
              <td className="border px-4 py-2">{task.title}</td>
              <td className="border px-4 py-2">{task.status}</td>
              <td className="border px-4 py-2">
                <Link to={`/edit/${task._id}`} className="text-blue-500 mr-2">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}