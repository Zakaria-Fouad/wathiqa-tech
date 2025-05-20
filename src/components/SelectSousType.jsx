import React from "react";

function SelectSousType({ types, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1">Type de document</label>
      <select
        className="w-full border rounded px-3 py-2"
        value={value}
        onChange={onChange}
      >
        {Object.keys(types).map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectSousType;