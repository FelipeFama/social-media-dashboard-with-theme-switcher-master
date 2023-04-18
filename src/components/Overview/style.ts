import styled from "styled-components";

export const OverviewContainer = styled.section`
  margin-top: -10rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, auto);
    grid-column-gap: 3rem;
  }
`;

export const OverviewTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.textPrimary};
  grid-column: 1/5;
`;
