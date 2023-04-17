import { useState } from "react";
import { theme } from "./styles/theme";
import { AppContainer } from "./styles/styles";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
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
