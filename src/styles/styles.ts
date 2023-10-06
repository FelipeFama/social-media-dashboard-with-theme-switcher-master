import styled from "styled-components";

export const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  min-width: 320px;
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textPrimary};
  @media (min-width: 1024px) {
    padding: 2rem 8%;
  }
`;
