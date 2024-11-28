import React, { useEffect } from "react";

function App() {
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomColor = getRandomColor();
      document.body.style.backgroundColor = randomColor;
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <h1>Har 2 sekundda rang o'zgaradi</h1>
    </div>
  );
}

export default App;
