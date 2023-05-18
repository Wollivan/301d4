import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/CatPage.css";

export default function CatPage() {
  const [cat, setCat] = useState({});
  const [form, setForm] = useState({
    name: "",
    colour: "",
    location: "",
  });

  const { id } = useParams();
  // const id = useParams().id;

  useEffect(() => {
    getCat();
  }, []);

  async function getCat() {
    const API = `http://localhost:8080/cats/${id}`;
    const res = await axios.get(API);
    setCat(res.data);
    // setForm({
    //   name: res.data.name,
    //   colour: res.data.colour,
    //   location: res.data.location,
    // });
  }

  async function updateCat(event) {
    event.preventDefault();
    const API = `http://localhost:8080/cats/${id}`;

    // you could look at form, and remove all blank properties so they aren't sent in the body to update the cat
    const body = { ...form };
    for (const key in body) {
      if (body[key] === "") {
        delete body[key];
      }
    }

    await axios.put(API, body);
    getCat();
  }

  function handleChange(event) {
    const newForm = { ...form, [event.target.name]: event.target.value };
    setForm(newForm);
  }

  return (
    <div>
      <h2>{cat.name}</h2>
      <p>{cat.colour}</p>
      <p>{cat.location}</p>
      <form onSubmit={updateCat}>
        <input name="name" placeholder="Name" onChange={handleChange} value={form.name} />
        <input name="colour" placeholder="Colour" onChange={handleChange} value={form.colour} />
        <input name="location" placeholder="Location" onChange={handleChange} value={form.location} />
        <input type="submit" />
      </form>
    </div>
  );
}
