import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import routing components
import { CompareProperty } from "./screens/CompareProperty";
import { DrildownAppcopilot } from "./screens/DrildownAppcopilot";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<CompareProperty />} /> 
        <Route path="/drilldown" element={<DrildownAppcopilot />} />
        {/* Drilldown Route */}
      </Routes>
    </Router>
  </React.StrictMode>
);
