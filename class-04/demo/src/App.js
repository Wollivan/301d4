import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    height: "",
    dob: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
    // send an email to the person with the name in state, or anything else you want to do here!
  }

  function handleChange(event) {
    const newForm = { ...form, [event.target.name]: event.target.value };
    // console.log(newForm);
    setForm(newForm);
  }

  return (
    <div className="App">
      <h1>Form Demo</h1>
      {form.name}
      <form>
        <input name="name" onChange={handleChange} />

        <input name="height" onChange={handleChange} />

        <input name="dob" onChange={handleChange} type="date" />

        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default App;
