import React, { useState } from "react";
import DoneIcon from "./../assets/done_black_24dp.svg";
import DeleteIcon from "./../assets/delete_black_24dp.svg";
import CloseIcon from "./../assets/close_black_24dp.svg";
import EditIcon from "./../assets/edit_black_24dp.svg";

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

  const iconWrappers = {
    closeIcon: <img src={CloseIcon} alt="close_black_icon" />,
    editIcon: <img src={EditIcon} alt="edit_black_icon" />,
    doneIcon: <img src={DoneIcon} alt="done_black_icon" />,
    deleteIcon: <img src={DeleteIcon} alt="delete_black_icon" />,
  };

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
        <div className="action-box">
          <button className="btn btn-danger" onClick={setDeleteHandler}>
            {editMode ? iconWrappers.closeIcon : iconWrappers.deleteIcon}
          </button>
          <button className="btn btn-primary" onClick={setEditHandler}>
            {editMode ? iconWrappers.doneIcon : iconWrappers.editIcon}
          </button>
        </div>
      </td>
    </tr>
  );
}
