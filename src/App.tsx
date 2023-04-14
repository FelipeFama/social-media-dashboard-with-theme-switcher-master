import { useState } from "react";
import Header from "./components/Header";
import { AppContainer, theme } from "./styles/App.styles";
import { ThemeProvider } from "styled-components";
import Social from "./components/Social";

export function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const handleThemeChange = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <>
      <ThemeProvider theme={theme[mode]}>
        <AppContainer>
          <Header currentTheme={mode} toggleTheme={handleThemeChange} />
          <main>
            <Social />
          </main>
        </AppContainer>
      </ThemeProvider>
    </>
  );
}
