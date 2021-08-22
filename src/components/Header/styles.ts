import styled from "styled-components";

type ButtonContainerProps = {
  width?: number;
  height?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  ts?: number; // tamanho texto
};

type HeaderInfoProps = {
  fontSize?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
};

export const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  position: absolute;
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 3.75rem;
`;
export const LoginButton = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  margin-top: ${({ mt }) => mt}rem;
  margin-right: ${({ mr }) => mr}rem;
  margin-left: ${({ ml }) => ml}rem;
  margin-bottom: ${({ mb }) => mb}rem;
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;
  background: transparent;
  color: white;
  font-weight: 500;
  font-family: Roboto;
  font-size: 16px;
  border: 2px solid;
  border-radius: 10px;
  border-color: white;
`;

export const WhiteButton = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  margin-top: ${({ mt }) => mt}rem;
  margin-right: ${({ mr }) => mr}rem;
  margin-left: ${({ ml }) => ml}rem;
  margin-bottom: ${({ mb }) => mb}rem;
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;
  background: white;
  border-color: transparent;
  border-radius: 10px;
  font-weight: 600;
  font-family: Roboto;
  font-size: ${({ ts }) => ts}rem;
  color: ${({ theme }) => theme.colors.primary};
  outline: none;
`;

export const Logo = styled.img`
  width: 6.961rem;
  height: 2.25rem;
  margin-right: 8.063rem;
  margin-left: 10.25rem;
`;
export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27.875.rem;
  height: 4.375rem;
  margin-right: 14.25rem;
  margin-left: 3rem;
`;
export const HeaderInfo = styled.a<HeaderInfoProps>`
  font-size: ${({ fontSize }) => fontSize}rem;
  font-family: Roboto;
  color: white;
  margin-top: ${({ mt }) => mt}rem;
  margin-right: ${({ mr }) => mr}rem;
  margin-left: ${({ ml }) => ml}rem;
  margin-bottom: ${({ mb }) => mb}rem;
`;

export const ContainerTab = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 1.5rem;
  text-decoration: none;
`

export const ProfileContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15.063rem;
  height: 2.5rem;
  text-decoration: none;
`