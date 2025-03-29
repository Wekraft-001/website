import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 class="text-6xl font-bold underline font-nexa text-primary-100">
        Primary Color & Font!
      </h1>
      <p class="text-5xl font-semibold underline text-primary-200 font-cocon">
        Secondary Color & Font!
      </p>
      <p class="text-4xl font-medium underline text-green-500 font-nunito">
        Checking 3rd font
      </p>
    </>
  );
}

export default App;
