import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 1.5rem;
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
