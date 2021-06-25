import React, { useState } from "react";
import "./TableFragment.css";

export default function TableFragment({
  id,
  num,
  name,
  age,
  handleDelete,
  handleEdit,
}) {
  const [editMode, setEditMode] = useState(false);
  const [inputName, setInputName] = useState(name);
  const [inputAge, setInputAge] = useState(age);

  const setEditHandler = () => {
    if (editMode) {
      handleEdit({ id, name: inputName, age: inputAge });
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  };

  const setDeleteHandler = () => {
    if (editMode) {
      setEditMode(false);
    } else {
      handleDelete(id);
    }
  };

  const changeHandler = (e) => {
    const type = e.target.type;
    const value = e.target.value;
    if (type === "text") {
      setInputName(value);
    }

    if (type === "number") {
      setInputAge(value);
    }
  };

  return (
    <tr>
      <th scope="row">{num}</th>
      <td>
        <input
          className={`input-${editMode ? "updating" : "normal"}`}
          readOnly={!editMode}
          type="text"
          value={editMode ? inputName : name}
          onChange={(e) => changeHandler(e)}
        />
      </td>
      <td>
        <input
          className={`input-${editMode ? "updating" : "normal"}`}
          readOnly={!editMode}
          type="number"
          value={editMode ? inputAge : age}
          onChange={(e) => changeHandler(e)}
        />
      </td>
      <td>
        <button className="btn btn-danger" onClick={setDeleteHandler}>
          {editMode ? "Canc" : "Del"}
        </button>
        <button className="btn btn-primary" onClick={setEditHandler}>
          {editMode ? "OK" : "Edi"}
        </button>
      </td>
    </tr>
  );
}
