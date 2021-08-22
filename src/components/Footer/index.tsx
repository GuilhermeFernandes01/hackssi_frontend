import React from "react";
import { FooterContainer, FooterText, IconsContainer } from "./styles";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";
import { colors } from "../../utils/styles/colors";

type FooterProps = {
  landing?: boolean;
}

export default function Footer({ landing } : FooterProps) {
  return (
    <FooterContainer landing={landing}>

      <FooterText>Fale conosco pelas redes sociais</FooterText>
      <IconsContainer>

     
      <SocialIcon
          url="https://facebook.com/"
          bgColor="white"
          fgColor={colors.footer}
          style={{
            width: "2.011rem",
            height: "2.011rem",
          }}
        />
        <SocialIcon
          url="https://whatsapp.com/"
          bgColor={colors.footer}
          fgColor="white"
          style={{
            width: "3.011rem",
            height: "3.011rem",
          }}
        />
        <SocialIcon
          url="https://telegram.com/"
          bgColor="white"
          style={{
            width: "2.011rem",
            height: "2.011rem",
          }}
        />
         </IconsContainer>
    </FooterContainer>
  );
}
