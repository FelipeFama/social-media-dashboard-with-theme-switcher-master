import { useState } from "react";
import Header from "./components/Header";
import { AppContainer, theme } from "./styles/App.styles";
import { ThemeProvider } from "styled-components";

export function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  return (
    <>
      <ThemeProvider theme={theme[mode]}>
        <AppContainer>
          <Header />
          <main></main>
        </AppContainer>
      </ThemeProvider>
    </>
  );
}
