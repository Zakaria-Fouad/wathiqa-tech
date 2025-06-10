import React, { useState } from "react";
import SelectSousType from "./SelectSousType";
import Button from "./Button";
import { documentService } from "../services/documentService";
import { useNavigate } from "react-router-dom";

function DynamicDocumentForm({ config }) {
  const [selectedType, setSelectedType] = useState(config.defaultType);
  // Initialiser le titre avec le label du type sélectionné par défaut
  const initialTitle = config.types[config.defaultType]?.label || config.label;
  const [formData, setFormData] = useState({ title: initialTitle });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const fields = config.types[selectedType];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Mettre à jour le titre automatiquement quand le type change
  const handleTypeChange = (e) => {
    const newType = e.target.value;
    setSelectedType(newType);
    setFormData((prev) => ({ ...prev, title: config.types[newType]?.label || config.label }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const payload = {
        title: formData.title,
        content: JSON.stringify(
          Object.fromEntries(
            Object.entries(formData).filter(([key]) => key !== "title")
          )
        )
      };
      console.log("Payload envoyé à Laravel :", payload); // Ajoute ce log ici
      const doc = await documentService.create(payload);
      console.log(doc);
      setSuccess(true);
      // Rediriger vers la page de détails pour téléchargement
      navigate(`/document/${doc.document.id}`);
    } catch (err) {
      setError(err.response?.data?.message || "Erreur lors de la création du document");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl w-full mx-auto">
      <SelectSousType
        types={config.types}
        value={selectedType}
        onChange={handleTypeChange}
      />
      {error && <div className="text-red-600 mb-4">{error}</div>}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6" onSubmit={handleSubmit}>
        {/* Champ titre obligatoire */}
        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Titre du document</label>
          <input
            className="w-full border rounded px-3 py-2"
            type="text"
            name="title"
            value={formData["title"] || ""}
            onChange={handleChange}
            required
          />
        </div>
        {fields && fields.map(field => (
          <div key={field.name}>
            <label className="block mb-1 font-medium">{field.label}</label>
            <input
              className="w-full border rounded px-3 py-2"
              type={field.type}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <div className="md:col-span-2 flex justify-end mt-4">
          <Button type="submit" disabled={loading}>{loading ? "Génération..." : "Générer"}</Button>
        </div>
      </form>
      {success && <div className="text-green-600 mt-4">Document créé avec succès !</div>}
    </div>
  );
}

export default DynamicDocumentForm;