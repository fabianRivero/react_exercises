import { useNavigate } from "react-router-dom";

export function Header({ children }) {
    
    const navigate = useNavigate();

    const goToMenu = async () => {
        navigate("/")
    }

    const goToEx1 = async () => {
        navigate("/ejercicio-1")
    }

    const goToEx2 = async () => {
        navigate("/ejercicio-2")
    }

    const goToEx3 = async () => {
        navigate("/ejercicio-3")
    }

    const goToEx4 = async () => {
        navigate("/ejercicio-4")
    }

    const goToEx5 = async () => {
        navigate("/ejercicio-5")
    }

    const goToEx6 = async () => {
        navigate("/ejercicio-6")
    }

    const goToEx7 = async () => {
        navigate("/ejercicio-7")
    }

    const goToEx8 = async () => {
        navigate("/ejercicio-8")
    }

    const goToEx9 = async () => {
        navigate("/ejercicio-9")
    }

  return (
    <>
        <header>
            <nav>
                <button onClick={goToMenu}>Menu</button>
                <button onClick={goToEx1}>Ejercicio 1</button>
                <button onClick={goToEx2}>Ejercicio 2</button>
                <button onClick={goToEx3}>Ejercicio 3</button>
                <button onClick={goToEx4}>Ejercicio 4</button>
                <button onClick={goToEx5}>Ejercicio 5</button>
                <button onClick={goToEx6}>Ejercicio 6</button>
                <button onClick={goToEx7}>Ejercicio 7</button>
                <button onClick={goToEx8}>Ejercicio 8</button>
                <button onClick={goToEx9}>Ejercicio 9</button>
            </nav>
        </header>
        {children}
    </>
  );
}

export default Header;
