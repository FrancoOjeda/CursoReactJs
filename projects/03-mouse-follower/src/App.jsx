import { useEffect, useState } from "react";
import "./App.css";

const FollowMouse = () => {
  const [enabled, setEnable] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e;
      console.log(clientX, clientY);
      setPosition({ x: clientX, y: clientY });
    };
    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }
    // cleanup method se ejecuta cuando se desmonta el componente y cuando cambian las dependencias
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  useEffect(() => {
    document.body.classList.toggle("no-cursor", !enabled);
    return () => {
      document.body.classList.remove("no-cursor");
    };
  }, [enabled]);
  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#09f",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px )`,
        }}
      />
      <button
        onClick={() => {
          setEnable(!enabled);
        }}
      >
        {enabled ? "desactivar " : "Activar "} seguir el puntero{" "}
      </button>
    </>
  );
};
function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  );
}

export default App;
