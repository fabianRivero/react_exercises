import { useState } from "react";

export default function Ejercicio1() {
  const [color, setColor] = useState("#ffffff");

  const changeColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
  };

  return (
    <div 
      className="main-content"
      style={{
        backgroundColor: color,
      }}
    >
      <button onClick={changeColor}>
        Cambiar color de fondo
      </button>
    </div>
  );
}


