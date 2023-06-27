import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Context
import ThemeProvider from "./context/themeContext";
import MealsProvider from "./context/mealsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <MealsProvider>
        <App />
      </MealsProvider>
    </ThemeProvider>
  </React.StrictMode>
);
