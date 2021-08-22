import React from "react";
import ContentCard from "../../components/ContentCard";
import {
  ContentContainer,
  ContentParagraph,
  LandingContainer,
  LandingParagraph,
  LandingWord,
} from "../../components/ContentCard/styles";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { WhiteButton } from "../../components/Header/styles";

export default function LandingPage() {

  return (
    <>
      <Header home={false} />
      <LandingContainer>
        <LandingParagraph>
          O jeito gratuito, fácil e intuitivo <br />
          de aprender
          <LandingWord> programação</LandingWord>
          <WhiteButton
            ts={1.5}
            ml={6.938}
            mt={4.938}
            mb={-5.3}
            width={24.5}
            height={3.438}
          >
            Comece agora!
          </WhiteButton>
        </LandingParagraph>
      </LandingContainer>

      <ContentParagraph>Quem somos e o que fazemos</ContentParagraph>
      <ContentContainer>
        <ContentCard
          icon="school"
          title="O programa"
          text="Promovemos a formação profissional na área de TI para jovens em situação de vulnerabilidade social, de forma a contribuir para garantir o acesso à educação inclusiva, de qualidade e equitativa na área de tecnologia"
        />
        <ContentCard
        icon="video"
          title="Sobre o curso"
          text="São diversos cursos oferecidos na área da tecnologia para que você possa aprimorar suas habilidades e ter a oportunidade de ser contratado pelas empresas parceirsas."
        />
        <ContentCard
          icon="phone"
          title="O programa"
          text="Caso não possua computador em casa ou não consiga utilizar o laboratório de informática de sua escola, você pode estudar diretamente do celular!"
        />
      </ContentContainer>
      <Footer landing={true} />
    </>
  );
}
