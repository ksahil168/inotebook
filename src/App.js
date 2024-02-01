import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated import

import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Routes>
            {" "}
            {/* Updated to use Routes instead of Switch */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
