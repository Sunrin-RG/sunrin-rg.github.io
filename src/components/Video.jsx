import React from "react";
import styled from "@emotion/styled";
import { Layout, SectionTitle, SectionSubtitle } from "../styles/atomic";
import background from "../assets/video.png";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #05071c;
    background-image: url(${background});
`;

const Content = styled.div`
    margin-top: 35px;
    width: 739px;
    height: 353px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #5650a3;

    box-shadow: #403e7e 14px 14px 0px, #2a2b59 28px 28px 0px;
    @media (max-width: 768px) {
        width: 315px;
        height: 208px;
    }
`;

const Inner = styled.div`
    width: 739px;
    height: 353px;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        width: 315px;
        height: 208px;
    }
`;

const IF = styled.iframe`
    width: 600px;
    height: 80%;
    border: none;
    @media (max-width: 768px) {
        width: 100%;
        height: 80%;
    }
`;

const Video = () => {
    return (
        <Container>
            <Layout>
                <SectionTitle>video</SectionTitle>
                <SectionSubtitle>RG의 홍보영상을 감상해보세요!</SectionSubtitle>
                <Content>
                    <Inner>
                        <IF
                            src="https://www.youtube.com/embed/JXUDdplcH0Y"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></IF>
                    </Inner>
                </Content>
            </Layout>
        </Container>
    );
};

export default Video;
