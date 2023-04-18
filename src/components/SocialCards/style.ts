import styled from "styled-components";

export const Card = styled.article`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 0.5rem;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.cardBackgroundHover};
  }
`;

export const CardDecorator = styled.div<{ color: string }>`
  width: 100%;
  height: 0.4rem;
  background: ${(props) => props.color};
`;

export const CardHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem 0;
`;

export const CardImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const CardTitle = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme.textSecondary};
`;

export const CardCount = styled.p`
  font-size: 4.25rem;
  line-height: 1em;
  font-weight: 700;
  color: ${(props) => props.theme.textPrimary};
`;
export const CardType = styled.p`
  font-size: 1rem;
  letter-spacing: 0.4rem;
  color: ${(props) => props.theme.textSecondary};
  text-transform: uppercase;
`;

export const CardFooter = styled.footer<{ type: "up" | "down" }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  padding: 2rem 0;
  p {
    font-size: 1rem;
    line-height: 1em;
    font-weight: 700;
    color: ${(props) =>
      props.type === "up" ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)"};
  }
`;
