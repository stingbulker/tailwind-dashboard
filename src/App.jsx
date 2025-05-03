import { useState } from "react";
// import './App.css'
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Activity from "./components/Activity";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="main" className="flex max-w-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <Cards />
        <Activity />
      </div>
    </div>
  );
}

export default App;
