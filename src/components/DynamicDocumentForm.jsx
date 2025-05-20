import React, { useState } from "react";
import SelectSousType from "./SelectSousType";
import Button from "./Button";

function DynamicDocumentForm({ config }) {
  const [selectedType, setSelectedType] = useState(config.defaultType);
  const [formData, setFormData] = useState({});

  const fields = config.types[selectedType];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 max-w-3xl w-full mx-auto">
      <SelectSousType
        types={config.types}
        value={selectedType}
        onChange={e => setSelectedType(e.target.value)}
      />
      <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {fields.map(field => (
          <div key={field.name}>
            <label className="block mb-1 font-medium">{field.label}</label>
            <input
              className="w-full border rounded px-3 py-2"
              type={field.type}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
            />
          </div>
        ))}
        <div className="md:col-span-2 flex justify-end mt-4">
          <Button>Générer</Button>
        </div>
      </form>
    </div>
  );
}

export default DynamicDocumentForm;