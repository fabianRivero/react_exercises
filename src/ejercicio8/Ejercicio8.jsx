import { useState } from "react";

export default function Ejercicio8() {
  const [text, setText] = useState("");

  const textarea = (e) => {
    setText(e.target.value);
  };

  const wordsArray = text.trim() === ""
    ? []
    : text.trim().split(/\s+/);

  const words = wordsArray.length;

  const letters = wordsArray.reduce(
    (total, word) => total + word.length,
    0
  );

  return (
    <div className="main-content">
      <textarea value={text} onChange={textarea} />
      <br />

      <div>
        <span>Numero de palabras:</span>
        <p>{words}</p>
      </div>

      <br />

      <div>
        <span>Numero de caracteres:</span>
        <p>{letters}</p>
      </div>
    </div>
  );
}
