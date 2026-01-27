import { useEffect, useRef, useState } from "react";

export default function Ejercicio6() {
  const [ticks, setTicks] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!running) return;

    intervalRef.current = setInterval(() => {
      setTicks(prev => prev + 1);
    }, 10);

    return () => clearInterval(intervalRef.current);
  }, [running]);

  const cs = ticks % 100;
  const totalSeconds = Math.floor(ticks / 100);
  const ss = totalSeconds % 60;
  const mm = Math.floor(totalSeconds / 60);

  const clock =
    `${String(mm).padStart(2, "0")}:` +
    `${String(ss).padStart(2, "0")}:` +
    `${String(cs).padStart(2, "0")}`;

  const start = () => setRunning(true);
  const pause = () => setRunning(false);
  const reset = () => {
    setRunning(false);
    setTicks(0);
  };

  return (
    <div className="main-content">
      <p>{clock}</p>

      <button id="start" onClick={start} disabled={running}>
        Iniciar
      </button>
      <button id="pause" onClick={pause} disabled={!running}>
        Pausar
      </button>
      <button id="reset" onClick={reset}>
        Reiniciar
      </button>
    </div>
  );
}
