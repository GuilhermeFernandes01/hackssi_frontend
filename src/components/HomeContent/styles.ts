import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    width: 100%;
    height: 57rem;
`

export const HomeLeftContainer = styled.div`
    margin-top: 80px;
    margin-left: 10.25rem;
    width: 49.772rem;
    border: 2px solid black;
    height: 40.313rem;
`

export const MainCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14.875rem;
    height: 12.5rem;
    border: 2px solid red;
    border-radius: 5px;
    box-shadow: 0 8px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
`

export const MainCardTitle = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.footer}
`
export const CourseCard = styled.div`

`

export const HomeRightContainer = styled.div`
    margin-top: 120px;
    margin-left: 10rem;
    height: 38rem;
    width: 22.5rem;
    border: 2px solid black;
`

export const HomeTitle = styled.span`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2.25rem;
    color: ${({ theme }) => theme.colors.footer};
`

export const RoadsContainer = styled.div`
    width : 52.5rem;
    margin-top: 10rem;
    height: 19.938rem;
    width: 49.772rem;
    height: 16.313rem;
`