import React, { useState } from "react";
import Form from "./components/Form";
import Results from "./components/Results";
import { getAllItems } from "./request/request";

function App() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const items = await getAllItems();
      setItems(items);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleAdd = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item._id !== id));
  };

  const handleUpdate = (updatedItem) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item._id === updatedItem._id ? updatedItem : item
      )
    );
  };

  React.useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <Form onAdd={handleAdd} />
      <Results items={items} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
}

export default App;
