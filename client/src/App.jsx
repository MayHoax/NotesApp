import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [apiData, setApiData] = useState([]);

  const fetchAllNotes = async () => {
    const response = await axios.get("http://localhost:3000/api");
    setApiData(response.data.fruits);
    console.log(response.data.fruits);
  };

  useEffect(() => {
    fetchAllNotes();
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600">Notes App</h1>
      <div className="mt-4">
        {apiData.map((el, index) => (
          <p key={index} className="text-lg text-gray-800">
            {el}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
