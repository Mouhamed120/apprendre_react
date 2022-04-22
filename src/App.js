import { useState } from "react";
import "./styles.css";

export default function App() {
  const [formData, setFormData] = useState({ nom: "", prenom: "", email: "" });
  const handleChange = (e) => {
    const obj = { ...formData, [e.target.name]: e.target.value };
    setFormData(obj);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ nom: "", prenom: "", email: "" });
  };
  return (
    <div>
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom</label>
          <input
            type="text"
            name="nom"
            onChange={handleChange}
            value={formData.nom}
          />
        </div>
        <br />
        <div>
          <label>Prenom</label>
          <input
            type="text"
            name="prenom"
            onChange={handleChange}
            value={formData.prenom}
          />
        </div>
        <div>
          <br />
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
