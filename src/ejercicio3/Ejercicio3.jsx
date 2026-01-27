import { useState } from "react";

export default function Ejercicio3() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const inputText = (e) => {
    setText(e.target.value)
  };

  const addItem = () => {
    setList([...list, text])
    setText("")
  };

const deleteItem = (index) => {
  const newList = list.filter((_, i) => i !== index);
  setList(newList);
};

  return (
      <div className="main-content">

      <input type="text" value={text} onChange={inputText} />

      <button onClick={addItem}>
        Agregar
      </button>

      <ul>
        {list.map((ls, index) => (
            <li key={index}>
              <div>
                {ls}
                <button onClick={() => deleteItem(index)}>Eliminar</button>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}


