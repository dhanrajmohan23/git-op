import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
           HMR
        </p>
      </div>
      <p className="read-the-docs">
         on the Vite and to learn more
      </p>
    </>
  );
}

export default App;
