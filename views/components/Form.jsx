import React from "react";

export default function Form({ valueName, valueAge, onChange, onSubmit }) {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input
          type="text"
          name="name"
          value={valueName}
          className="form-control"
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Age:</label>
        <input
          type="number"
          name="age"
          value={valueAge}
          className="form-control"
          onChange={(e) => onChange(e)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
}
