import React from "react";
import styled from "@emotion/styled";
import background from "../assets/apply.png";

const Layout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 402px;
    background-color: #05071c;
    background-image: url(${background});
    @media (max-width: 768px) {
        flex-direction: column;
        height: 600px;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
        height: 50%;
        justify-content: center;
    }
`;

const Line = styled.div`
    width: 1px;
    height: 284px;
    background: rgba(255, 255, 255, 0.6);
    @media (max-width: 768px) {
        width: 200px;
        height: 1px;
    }
`;

const Title = styled.div`
    font-family: "BRLNSDB";
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 47px;
    letter-spacing: 0.01em;

    color: #ffffff;
    @media (max-width: 768px) {
        font-size: 28px;
        line-height: 23px;
    }
`;

const Text = styled.div`
    color: white;
    font-size: 27px;
    text-align: center;
    line-height: 160%;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;
const Text2 = styled.div`
    font-weight: 400;
    font-size: 23px;
    line-height: 160%;
    margin-top: 30px;

    text-align: center;
    letter-spacing: -0.08em;

    color: #ffffff;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const Block = styled.div`
    height: 50px;
`;

const ApplyButton = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 162px;
    height: 37px;
    background: #606cc0;
    border-radius: 14px;
    border: none;
    color: white;
    &:hover {
        background: #4f5aa8;
        cursor: pointer;
    }
    @media (max-width: 768px) {
        width: 88px;
        height: 25px;
    }
`;

const Block2 = styled.div`
    height: 36px;
`;

const Apply = () => {
    return (
        <Layout>
            <Column>
                <Title>Apply</Title>
                <Block />
                <Text>
                    RG가 마음에 드셨나요? <br />
                    그렇다면 신청하기를 통해 RG의 새로운 부원이 되어주세요!{" "}
                    <br />
                    RG는 당신을 기다리고 있습니다. :D
                </Text>
                <Block2 />
                <ApplyButton href="https://docs.google.com/forms/d/e/1FAIpQLScUR-c5YrHjK3L7fsK-TrE7JFAsLq4Erq6lDHkS3pGKJHKF8A/viewform?usp=pp_url">
                    지원하기
                </ApplyButton>
            </Column>
            <Line />
            <Column>
                <Title>Help</Title>
                <Block />
                <Text>
                    더 궁금하신 점이 있다면 아래 전화번호로 연락주세요 :) <br />
                </Text>
                <Text2>
                    부장 정한용 010-8682-0805 <br />
                    부부장 장운지 010-9768-9950
                </Text2>
            </Column>
        </Layout>
    );
};

export default Apply;
