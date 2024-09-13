import React from "react";
import ReactDOMClient from "react-dom/client";
import { DrildownAppcopilot } from "./screens/DrildownAppcopilot";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<DrildownAppcopilot />);
