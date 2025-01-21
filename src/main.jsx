import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Algebra from "./Component/header.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Algebra/>
    <App/>
  </>
);