import React, { useState, useEffect } from 'react';
import './App.css';
function App() {
  const [data, setData] = useState([]);
useEffect(() => {
  fetchData();
}, []);

  const fetchData = async () => {
    let dt = await fetch("http://localhost:5000/api/getdata", {
        method: "GET",
        headers: {
            "Content-Type": 'application/json'
        }
    });
    let pt = await dt.json();
    setData(pt);
  }
  const saveDataToFile = () => {
    const textData = JSON.stringify(data); // Convert data to JSON string
    const blob = new Blob([textData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.txt'; // Set the filename
    a.click();
    URL.revokeObjectURL(url);
  };
  return (
    <div className="App">
        <button onClick={saveDataToFile}>Save Data</button>
    </div>
  );
}
export default App;



