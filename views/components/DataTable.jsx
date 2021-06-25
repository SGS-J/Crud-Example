import React from "react";
import TableFragment from "./TableFragment.jsx";

export default function DataTable({ data, onDelete, onEdit }) {
  const rows = data.map((value, i) => {
    return (
      <TableFragment
        key={value._id}
        id={value._id}
        num={i + 1}
        name={value.name}
        age={value.age}
        handleDelete={onDelete}
        handleEdit={onEdit}
      />
    );
  });
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
