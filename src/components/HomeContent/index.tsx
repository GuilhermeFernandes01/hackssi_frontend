import React from "react";
import { colors } from "../../utils/styles/colors";
import { HomeContainer, HomeLeftContainer, HomeRightContainer, HomeTitle, MainCard, MainCardTitle, RoadsContainer } from "./styles";
import { MdSchool } from "react-icons/md";

// type ContentCardProps = {
//   icon: string;
//   title: string;
//   text: string;
// };

export default function HomeContent() {
  return (
      <HomeContainer>
        <HomeLeftContainer>
            <HomeTitle>Cursos em andamento</HomeTitle>
            <MainCard>
                <MdSchool size={24 } color="black" />
                <MainCardTitle />
            </MainCard>

            
            <RoadsContainer>
            <HomeTitle>Trilhas</HomeTitle>
            
            </RoadsContainer>
        </HomeLeftContainer>
        
        <HomeRightContainer />
      </HomeContainer>
  );
}
