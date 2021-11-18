import { useState } from "react";
import "./App.css";
import AddUser from "./components/adduser";
import Home from "./components/home";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./components/about";
function App() {
  const [state, setState] = useState([]);
  const adduserHandle = (data) => {
    setState(data);
  };
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home data={state} />} />
        <Route path="/adduser"element={<AddUser onAddUser={adduserHandle} />} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
