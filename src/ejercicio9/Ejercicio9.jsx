import { useEffect, useState } from "react";

export default function Ejercicio9() {

  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("list");
    return saved ? JSON.parse(saved) : [];
  });

  const [text, setText] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(items));
  }, [items]);

  const inputValue = (e) => {
    setText(e.target.value);
  };

  const addItem = () => {
    if (text.length === 0) {
      setError("Debes escribir una tarea para poder añadirla.");
      return;
    }

    setError("");

    const newItem = {
      id: Date.now(),
      text,
      done: false
    };

    setItems(prev => [...prev, newItem]);
    setText("");
  };

  const checkItem = (id) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, done: !item.done }
          : item
      )
    );
  };

  const removeAll = () => {
    localStorage.removeItem("list");
    setItems([]);
    setError("");
    setText("");
  }

  return (
    <div className="main-content">
        <h1>Lista de tareas</h1>

        <ul>
          {items.map(item => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.done}
                onChange={() => checkItem(item.id)}
              />
              <span>
                {item.text}
              </span>
            </li>
          ))}
        </ul>

        <p>Nueva tarea:</p>
        <input type="text" value={text} onChange={inputValue} />
        <button onClick={addItem}>Añadir tarea</button>
        <br />
        <p>{error}</p>
        <br />
        <button onClick={removeAll}>Eliminar todas las tareas</button>
    </div>
  );
}
