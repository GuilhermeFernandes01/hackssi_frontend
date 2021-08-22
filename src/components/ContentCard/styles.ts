import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 50.313rem;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CardTitle = styled.p`
  font-size: 2rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: 2.313rem;
  color: ${({ theme }) => theme.colors.primary};
`;
export const ParagraphContainer = styled.div`
  display: block;
  align-items: center;
  text-align: center;
  width: 22.375rem;
  height: 5.938rem;
`;
export const CardParagraph = styled.p`
  font-family: Roboto;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.172rem;
  color: ${({ theme }) => theme.colors.footer};
`;

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72.375rem;
  height: 18.438rem;
`;

export const ContentParagraph = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8.25rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 2.875rem;
  line-height: 3.375rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const LandingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 34.438rem;
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const LandingParagraph = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 2.875rem;
  line-height: 3.369rem;
  align-items: center;
`;

export const LandingWord = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;
