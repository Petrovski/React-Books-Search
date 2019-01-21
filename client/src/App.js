import React from "react";
import Books from "./pages/Books";
import Heading from "./components/Heading/index"
import Nav from "./components/Nav/index";
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <Heading />
      <Books />
    </div>
  );
}

export default App;
