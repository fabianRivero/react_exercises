import { useState } from "react";

export default function Ejercicio4() {
  const words = ["Perro", "Gato", "Pez", "Persona", "Goma"];

  const [text, setText] = useState("");
  const [list, setList] = useState(words);

  const inputText = (e) => {
    const value = e.target.value.toLowerCase();
    setText(value);

    const filtered = words.filter(word =>
      word.toLowerCase().includes(value)
    );

    setList(filtered);
  };

  return (
      <div className="main-content">

      <input type="text" value={text} onChange={inputText} />

      <ul>
        {list.map((ls, index) => (
            <li key={index}>{ls}</li>
          )
        )}
      </ul>
    </div>
  );
}


