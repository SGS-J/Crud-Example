import React, { useEffect, useState } from "react";
import Form from "./components/Form.jsx";
import DataTable from "./components/DataTable.jsx";

export default function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [events, setEvents] = useState(1);

  // Functions
  const updateData = async () => {
    const res = await fetch("/api", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `
          {
            getUsers {
              _id
              name
              age
            }
          }
        `,
      }),
    });
    const {
      data: { getUsers: newData },
    } = await res.json();
    setData(newData);
  };

  useEffect(() => {
    updateData();
  }, [events]);

  // Handlers
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
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          mutation {
            createUser(newUser: {
              name: "${name}"
              age: ${Number(age)}
            }) {
              name
            }
          }
        `,
      }),
    });
    setName("");
    setAge("");
    setEvents(events + 1);
  };

  const handleDelete = async (id) => {
    await fetch("/api", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `
          mutation {
            deleteUser(id: "${id}") {
              name
            }
          } 
        `,
      }),
    });
    setEvents(events + 1);
  };

  const handleEdit = async (newData) => {
    await fetch("/api", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `
          mutation {
            editUser(newUserValues: {
              id: "${newData.id}"
              name: "${newData.name}"
              age: ${Number(newData.age)}
            }) {
              name
            }
          }
        `,
      }),
    });
    setEvents(events + 1);
  };

  return (
    <main className="row">
      <div className="col">
        <Form
          valueName={name}
          valueAge={age}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
      <div className="col">
        <DataTable data={data} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </main>
  );
}
