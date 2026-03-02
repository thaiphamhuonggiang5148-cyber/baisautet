import { useState, useEffect } from "react";
import LetterList from "./components/LetterList";
import LetterForm from "./components/LetterForm"; 
import "./App.css";

function App() {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    console.log("App mounted - lần render đầu tiên");
  }, []);

  useEffect(() => {
    console.log("Letters updated:", letters);
  }, [letters]);

  const addLetter = (content) => {
    setLetters([
      ...letters,
      {
        id: Date.now(),
        content,
      },
    ]);
  };

return (
  <div className="container">
    <LetterForm onAdd={addLetter} />
    <LetterList letters={letters} />
  </div>
);
}

export default App;