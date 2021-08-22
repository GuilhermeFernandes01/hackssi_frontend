import React from "react";
import {
  ContainerInfo,
  ContainerTab,
  HeaderContainer,
  HeaderInfo,
  LoginButton,
  Logo,
  ProfileContainer,
  WhiteButton,
} from "./styles";
import logo from "../../utils/img/eTechLogo.svg";
import { MdSchool } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { MdAssignment } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { MdLightbulbOutline } from "react-icons/md";
import { useHistory } from "react-router-dom";

type HeaderProps = {
  home?: boolean;
};

export function Header({ home }: HeaderProps) {
  const navigate = useHistory();

  function handleOnClickLogin() {
    navigate.push("/home");
  }

  return (
    <>
      {home ? (
        <HeaderContainer>
          <Logo src={logo} />
          <ContainerInfo>
            <ContainerTab href="facebook.com">
              <MdHome size={24} color="white" />
              <HeaderInfo fontSize={1} mr={4.25} ml={0.2} >
                Início
              </HeaderInfo>
            </ContainerTab>

            <ContainerTab href="google.com">
              <MdSchool size={24} color="white" />
              <HeaderInfo fontSize={1} mr={4.25} ml={0.4} >
                Aulas
              </HeaderInfo>
            </ContainerTab>

            <ContainerTab href="twitter.com">
              <MdAssignment size={24} color="white" />
              <HeaderInfo fontSize={1} mr={4.25} ml={0.2} >
                Projetos
              </HeaderInfo>
            </ContainerTab>

            <ContainerTab href="github.com">
              <MdLightbulbOutline size={24} color="white" />
              <HeaderInfo fontSize={1} mr={4.25} ml={0.2}>
                Vagas
              </HeaderInfo>
            </ContainerTab>
          </ContainerInfo>
          <ProfileContainer>
            <MdAccountCircle size={28} color="white" />
            <HeaderInfo fontSize={1} ml={0.5} >
              Felipe Oliveira
            </HeaderInfo>
          </ProfileContainer>
        </HeaderContainer>
      ) : (
        <HeaderContainer>
          <Logo src={logo} />
          <ContainerInfo>
            <HeaderInfo fontSize={1.25} mr={4.25}>
              Sobre
            </HeaderInfo>
            <HeaderInfo fontSize={1.25} mr={4.25}>
              Parceiros
            </HeaderInfo>
            <HeaderInfo fontSize={1.25} mr={4.25}>
              Empresas
            </HeaderInfo>
          </ContainerInfo>
          <LoginButton onClick={handleOnClickLogin} width={8.5} height={2.1888}>
            Entrar
          </LoginButton>
          <WhiteButton ts={1} width={8.5} height={2.1888}>
            Cadastrar
          </WhiteButton>
        </HeaderContainer>
      )}
    </>
  );
}
