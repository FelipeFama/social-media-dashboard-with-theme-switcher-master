import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 1.5rem;
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 1.825rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

export const HeaderSubtitle = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: ${(props) => props.theme.textSecondary};
`;

export const Separator = styled.div`
  background-color: ${(props) => props.theme.textSecondary};
  margin: 1.5rem 0;
  padding: 0.5px;
  width: 100%;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const SwitchContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (min-width: 1024px) {
    grid-column: 2/3;
    grid-row: 1/3;
    gap: 1rem;
    align-self: center;
    justify-self: flex-end;
    width: auto;
  }
`;

export const SwitchLabel = styled.label`
  font-size: 1.15rem;
  font-weight: 700;
  color: ${(props) => props.theme.textSecondary};
`;

export const SwitchButton = styled.button`
  width: 3.5rem;
  height: 1.75rem;
  border: none;
  border-radius: 1.75rem;
  outline: none;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    background: linear-gradient(90deg, hsl(210, 78%, 56%));
  }
  &::before {
    content: "";
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background: ${(props) => props.theme.background};
  }
  &.dark {
    background: linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%));
    &:hover {
      filter: brightness(1.1);
    }
    &::before {
      left: 0.25rem;
    }
  }
`;
