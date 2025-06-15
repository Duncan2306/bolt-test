import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FinalVersion } from "./screens/FinalVersion/FinalVersion";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <FinalVersion />
  </StrictMode>,
);
