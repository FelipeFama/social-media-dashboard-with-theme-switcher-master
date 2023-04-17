import styled from "styled-components";

export const SocialContainer = styled.div`
  position: relative;
  top: -11rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;
  margin-bottom: 3rem;
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 3rem;
  }
`;
