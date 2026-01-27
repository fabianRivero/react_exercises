import { useState } from "react";

export default function Ejercicio5() {
  const [top, setTop] = useState(0);
  const [bottom, setBottom] = useState(0);
  const [result, setResult] = useState("");

  const topValue = (e) => {
    const value = e.target.value;
    setTop(value);
  };

  const bottomValue = (e) => {
    const value = e.target.value;
    setBottom(value);
  };

  function condition(procedure){
    const num1Str = top;
    const num2Str = bottom;

    const num1Value = Number(num1Str);
    const num2Value = Number(num2Str);

    if (num1Str !== "" && num2Str !== "" && !Number.isNaN(num1Value) && !Number.isNaN(num2Value)) {
      procedure(num1Value, num2Value);
    } else {
      setResult("Debes ingresar solo numeros en la calculadora.");
    }
  }

  const sum = () => {
    const res = Number(top) + Number(bottom) 
    setResult(res) 
  }

  const rest = () => {
    const res = Number(top) - Number(bottom)
    setResult(res) 
  }

  const mul = () => {
    const res = Number(top) * Number(bottom)
    setResult(res) 
  }
   
  const divide = () => {
    if (Number(bottom) === 0) {
      setResult("No es posible dividir entre 0")
    } else {
      const res = Number(top) / Number(bottom)
      setResult(res) 
    }
  }

  return (
      <div className="main-content">

      <input type="number" value={top} onChange={topValue} />
      <br />
      <input type="number" value={bottom} onChange={bottomValue} />
      <br />
      <button onClick={() => condition(sum)}>+</button>
      <button onClick={() => condition(rest)}>-</button>
      <button onClick={() => condition(mul)}>*</button>
      <button onClick={() => condition(divide)}>/</button>
      <br />
      <p>Resultado: {result}</p>
    </div>
  );
}


