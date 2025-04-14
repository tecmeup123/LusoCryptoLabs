import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add phosphor icons to window object
declare global {
  interface Window {
    PhosphorIcons: any;
  }
}

createRoot(document.getElementById("root")!).render(<App />);
