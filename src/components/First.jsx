import React from "react";
import styled from "@emotion/styled";
import background from "../assets/background.png";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

const IntroduceLayout = styled.div`
    position: absolute;
    top: 140px;
    left: 120px;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        top: 112px;
        left: 32px;
    }
`;

const LearnMore = styled.div`
    position: absolute;
    bottom: 30px;
    width: 100%;
    font-size: 16px;
    font-weight: medium;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    @media (max-width: 768px) {
        font-size: 20px;
        bottom: 50px;
    }
`;

const Title = styled.div`
    font-family: "BRLNSDB";
    font-style: normal;
    font-weight: 700;
    font-size: 70px;
    line-height: 80%;
    letter-spacing: normal;
    color: #cacfff;
    @media (max-width: 768px) {
        font-size: 55px;
        color: white;
    }
`;

const Description = styled.div`
    color: #a5b0e1;
    margin-top: 13px;
    font-size: 28px;
    @media (max-width: 768px) {
        font-size: 20px;
        color: white;
    }
`;

const First = () => {
    return (
        <Container>
            <IntroduceLayout>
                <Title>
                    REPUBLIC <br /> OF GAME
                </Title>
                <Description>게임 개발 동아리</Description>
            </IntroduceLayout>
            <LearnMore>
                더 알아보기
                <svg
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4.5 9L0.602887 0.749999L8.39711 0.75L4.5 9Z"
                        fill="white"
                    />
                </svg>
            </LearnMore>
        </Container>
    );
};

export default First;
