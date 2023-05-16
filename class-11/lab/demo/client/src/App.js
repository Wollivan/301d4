import "./App.css";
import Book from "./components/Book";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  // run getBooks on page load
  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    const API = "http://localhost:8080/books";
    const res = await axios.get(API);
    setBooks(res.data);
  }

  return (
    <div className="App">
      <h1>Book Galore!</h1>
      {books.map((book) => {
        return <Book title={book.title} description={book.description} status={book.status} />;
      })}
    </div>
  );
}

export default App;
