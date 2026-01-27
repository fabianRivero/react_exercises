import { useState } from "react";

export default function Ejercicio7() {
  const letters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "abcdefghijklmnopqrstuvwxyz" +
    "0123456789" +
    "!@#$%&" 
  ;

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const inputPassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 4) {
      setError("La contraseña debe tener por lo menos 4 carácteres.")
    } else {
      setError("")
    }

    if (value.length === 0) setError("")
  };

  const generatePassword = () => {
    let res = "";

    for (let i = 0; i < 10; i++) {
      const index = Math.floor(Math.random() * letters.length);
      res += letters[index];
    }

    setPassword(res);
    setError("")
  }


  return (
    <div className="main-content">
        <input type="text" value={password} onChange={inputPassword}/>
        <br />
        <p>{error}</p>
        <button onClick={generatePassword}>Generar contraseña</button>
    </div>
  );
}
