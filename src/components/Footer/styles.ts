import styled from "styled-components";

type FooterProps = {
  landing?: boolean;
}

export const FooterContainer = styled.div<FooterProps>`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ landing }) =>  landing ? "8.688" : "3.25"}rem;
  background: ${({ theme, landing }) => landing ? theme.colors.footer : theme.colors.primary };
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.051rem;
`;

export const FooterText = styled.p`
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1.291rem;
  line-height: 1.313rem;
  color: white;
`;
