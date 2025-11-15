import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { theme } from "./Components/Styles/theme";

function setCssVariables(obj: any, prefix = "") {
  Object.entries(obj).forEach(([key, value]) => {
    const varName = prefix ? `${prefix}-${key}` : key;
    if (typeof value === "string") {
      document.documentElement.style.setProperty(`--color-${varName}`, value);
    } else {
      setCssVariables(value, varName);
    }
  });
}
setCssVariables(theme.colors);

document.documentElement.style.setProperty("--fontFamily", theme.fontFamily);
document.documentElement.style.setProperty("--color-borderRadius", theme.borderRadius);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
