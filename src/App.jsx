import "./App.css";
import { useState, useEffect } from "react";
import { ThemeContextProvider } from "./Contexts/Theme";
import { Card, ThemeButton } from "./Components";
function App() {
  const [themeColor, setThemeColor] = useState("light");

  //we can overwrite the default function of context like this
  const darkTheme = () => {
    setThemeColor("dark");
  };
  const lightTheme = () => {
    setThemeColor("light");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeColor);
  }, [themeColor]);

  return (
    <ThemeContextProvider value={{ themeColor, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
