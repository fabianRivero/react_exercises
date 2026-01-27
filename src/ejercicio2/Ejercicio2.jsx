import { useState } from "react";

export default function Ejercicio2() {
  const [clicks, setClicks] = useState(0);

  const click = () => {
    setClicks(clicks + 1);
  };

  return (
      <div className="main-content">
      <button onClick={click}>
        Click
      </button>

      <p>Clicks: {clicks}</p>
    </div>
  );
}


