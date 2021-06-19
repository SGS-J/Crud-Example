import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Form from "./components/Form.jsx";

export default function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState();

  const updateData = async () => {
    const res = await fetch("/api");
    const newData = res.json();
    setData(newData);
  };

  const handleChange = (e) => {
    const type = e.target.name;
    const value = e.target.value;
    if (type === "name") {
      setName(value);
    }
    if (type === "age") {
      setAge(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        age: Number(age),
      }),
    });
    await updateData();
  };

  return (
    <main className="container">
      <Form
        valueName={name}
        valueAge={age}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </main>
  );
}
