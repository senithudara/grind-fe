import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gradient-to-b ">
        <h1 className="text-blue-600">My page</h1>
      </div>
    </>
  );
}

export default App;
