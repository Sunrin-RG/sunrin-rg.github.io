import React from "react";
import styled from "@emotion/styled";
import background from "../assets/blured.png";
import {
    Layout,
    SectionTitle,
    SectionSubtitle,
    SectionContent,
} from "../styles/atomic";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Introduce = () => {
    return (
        <Container>
            <Layout>
                <SectionTitle>introduce</SectionTitle>
                <SectionSubtitle>RG는 이런 동아리입니다!</SectionSubtitle>
                <SectionContent>
                    소프트웨어과 전공 동아리인 RG는 게임개발 전문 동아리입니다.{" "}
                    <br />
                    Unity 등의 엔진을 이용해 기초 기본 심화 과정을 거쳐서 직접
                    개발하고 <br />
                    다양한 디자인 도구를 활용해 게임을 꾸며 나갑니다.
                </SectionContent>
            </Layout>
        </Container>
    );
};

export default Introduce;
