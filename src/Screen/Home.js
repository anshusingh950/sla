import React, { useState, useEffect } from 'react';
import axios from 'axios'; // or any other library for making HTTP requests

const YourComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from MongoDB
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('your-mongodb-api-url');
      setData(response.data); // Assuming MongoDB returns an array of objects
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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
    <div>
      <button onClick={saveDataToFile}>Save Data</button>
    </div>
  );
};

export default YourComponent;