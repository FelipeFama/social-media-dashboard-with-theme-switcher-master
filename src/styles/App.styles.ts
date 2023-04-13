import styled from "styled-components";

export const theme = {
  light: {
    background: "hsl(0, 0%, 100%)",
    topBackgroundPattern: "hsl(225, 100%, 98%)",
    cardBackground: "hsl(227, 47%, 96%)",
    cardBackgroundHover: "hsl(232, 33%, 91%)",
    textPrimary: "hsl(230, 17%, 14%)",
    textSecondary: "hsl(228, 12%, 44%)",
  },
  dark: {
    background: "hsl(230, 17%, 14%)",
    topBackgroundPattern: "hsl(232, 19%, 15%)",
    cardBackground: "hsl(228, 28%, 20%)",
    cardBackgroundHover: "hsl(228, 26%, 27%)",
    textPrimary: "hsl(0, 0%, 100%)",
    textSecondary: "hsl(228, 34%, 66%)",
  },
};

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  min-width: 320px;
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textPrimary};

  @media (min-width: 1024px) {
    padding: 2rem 10%;
  }
`;
