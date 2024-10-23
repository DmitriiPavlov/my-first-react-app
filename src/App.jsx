import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
// import Reminder from './Reminder.jsx';

function App() {
  // Initialize the localStorage list if it doesn't exist
  if (localStorage.getItem("list") === null) {
    localStorage.setItem("list", JSON.stringify([]));
  }

  // Initialize state with the parsed list from localStorage
  const [reminderList, setReminders] = useState(() => {
    const savedList = localStorage.getItem("list");
    return savedList ? JSON.parse(savedList) : [];
  });

  const addReminder = () => {
    const reminderInput = document.getElementById("reminderinput").value;
    if (reminderInput) {
      const newList = [...reminderList, reminderInput];
      localStorage.setItem("list", JSON.stringify(newList)); // Save updated list to localStorage
      setReminders(newList); // Update state with new reminder
      document.getElementById("reminderinput").value = ''; // Clear input after adding
    }
  };

  return (
    <>
      <input id="reminderinput" placeholder="Enter a reminder"></input>
      <button onClick={addReminder}>Add Reminder</button>

      <ul>
        {reminderList.map((reminder, index) => (
          <li key={index}>{reminder}</li>
        ))}
      </ul>
    </>
  );
}

export default App;