import React from "react";
import { MdSchool } from "react-icons/md";
import { MdOndemandVideo } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import { colors } from "../../utils/styles/colors";
import {
  Card,
  CardParagraph,
  CardsContainer,
  CardTitle,
  ParagraphContainer,
} from "./styles";

type ContentCardProps = {
  icon: string;
  title: string;
  text: string;
};
export default function ContentCard({ icon, title, text }: ContentCardProps) {
  return (
    <>
      <CardsContainer>
        <Card>
          <ParagraphContainer>
            {icon === "school" ? (
              <MdSchool size={120} color={colors.primary} />
            ) : (
              ""
            )}
            {icon === "video" ? (
              <MdOndemandVideo size={120} color={colors.primary} />
            ) : (
              ""
            )}
            {icon === "phone" ? (
              <MdPhoneIphone size={120} color={colors.primary} />
            ) : (
              ""
            )}
            <CardTitle>{title}</CardTitle>
            <CardParagraph>{text} </CardParagraph>
          </ParagraphContainer>
        </Card>
      </CardsContainer>
    </>
  );
}
