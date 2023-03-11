import React from "react";
import styled from "@emotion/styled";
import { Layout, SectionTitle, SectionSubtitle } from "../styles/atomic";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #05071c;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    margin-top: 35px;
    width: 739px;
    height: 353px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #5650a3;
    box-shadow: #403e7e 14px 14px 0px, #2a2b59 28px 28px 0px;
    @media (max-width: 768px) {
        width: 315px;
        height: 330px;
    }
`;

const ScrollBox = styled.div`
    width: 739px;
    height: 353px;
    padding: 20px;
    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    align-items: center;
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #5650a3;
    }
    ::-webkit-scrollbar-thumb {
        background: #403e7e;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #2a2b59;
    }
    @media (max-width: 768px) {
        width: 315px;
        height: 330px;
    }
`;

const AwardText = styled.div`
    font-size: 20px;
    font-weight: 500;
    line-height: 160%;
    color: #fff;
    margin-bottom: 20px;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const Year = styled.div`
    font-size: 30px;
    font-weight: 700;
    line-height: 160%;
    color: #fff;
    margin-bottom: 30px;
    box-shadow: white 0 3px 0px;
    @media (max-width: 768px) {
        font-size: 17px;
    }
`;

const Award = () => {
    return (
        <Container>
            <Layout>
                <SectionTitle>award</SectionTitle>
                <SectionSubtitle>
                    RG 부원들이 이뤄낸 업적들이에요!
                </SectionSubtitle>
                <Content>
                    <ScrollBox>
                        <Year>2022</Year>
                        <AwardText>
                            한국코드페어 고등부 SW공모전 본선 16등 <br />
                            정한용
                        </AwardText>
                        <AwardText>
                            IT분야 직업계고 게임개발대회 장려상
                            <br />
                            김기현 박신홍 장운지 정지훈
                        </AwardText>
                        <AwardText>
                            gigdc 중고등부 동상
                            <br />
                            김준서
                        </AwardText>
                        <AwardText>
                            해커톤 동상
                            <br />
                            김기현 박신홍 정지훈 / 김범수
                        </AwardText>
                        <AwardText>
                            그래픽 공모전 캐릭터 부문 금상
                            <br />
                            장운지
                        </AwardText>
                        <AwardText>
                            그래픽 공모전 일러스트레이션 부문 금상
                            <br />
                            이유진
                        </AwardText>
                        <AwardText>
                            그래픽 공모전 일러스트레이션 부문 은상
                            <br />
                            이유진
                        </AwardText>
                        <Year>2021</Year>

                        <AwardText>
                            모바일 콘텐츠 경진대회 동상
                            <br />
                            정ㅇㅇ 서ㅇㅇ / 김ㅇㅇ 박ㅇㅇ
                        </AwardText>
                        <AwardText>
                            영상제작공모전 금상
                            <br />
                            윤ㅇㅇ
                        </AwardText>
                        <AwardText>
                            블로그를 이용한 포트폴리오 공모전 은상
                            <br />
                            윤ㅇㅇ
                        </AwardText>
                        <AwardText>
                            해커톤 은상
                            <br />
                            김ㅇㅇ
                        </AwardText>
                        <AwardText>
                            프로그래밍경진대회 동상
                            <br />
                            김ㅇㅇ / 이ㅇㅇ
                        </AwardText>

                        <Year>2020</Year>
                        <AwardText>
                            모바일 콘텐츠 경진대회 대상
                            <br />
                            이ㅇㅇ
                        </AwardText>
                        <AwardText>
                            모바일 콘텐츠 경진대회 은상
                            <br />
                            박ㅇㅇ
                        </AwardText>
                        <AwardText>
                            그래픽 디자인 공모전 은상
                            <br />
                            박ㅇㅇ
                        </AwardText>
                        <AwardText>
                            창의아이디어 경진대회 동상
                            <br />
                            정ㅇㅇ
                        </AwardText>
                        <AwardText>
                            선린 해커톤 은상
                            <br />
                            김ㅇㅇ 정ㅇ 조ㅇㅇ
                        </AwardText>
                        <AwardText>
                            선린 해커톤 동상
                            <br />
                            박ㅇㅇ 윤ㅇㅇ 정ㅇㅇ 정ㅇㅇ
                        </AwardText>
                        <AwardText>
                            청강문화산업대학교 실기대전 입상
                            <br />
                            김ㅇㅇ
                        </AwardText>
                        <Year>2019</Year>
                        <AwardText>
                            모바일 콘텐츠 경진대회 금상
                            <br />
                            박ㅇㅇ / 정ㅇㅇ
                        </AwardText>
                        <AwardText>
                            모바일 콘텐츠 경진대회 동상
                            <br />
                            이ㅇㅇ / 정ㅇㅇ 황ㅇㅇ / 어ㅇㅇ
                        </AwardText>
                        <AwardText>
                            천하제일 코딩대회 은상
                            <br />
                            정ㅇㅇ
                        </AwardText>
                        <AwardText>
                            선린 해커톤 금상
                            <br />
                            김ㅇㅇ 이ㅇㅇ 조ㅇㅇ 홍ㅇㅇ
                        </AwardText>
                        <AwardText>
                            콘솔게임 개발대회 은상
                            <br />
                            정ㅇㅇ
                        </AwardText>
                        <AwardText>
                            디지털 콘텐츠 경진대회 대상
                            <br />
                            이ㅇㅇ 박ㅇㅇ
                        </AwardText>
                        <AwardText>
                            디지털 콘텐츠 경진대회 금상
                            <br />
                            김ㅇㅇ 어ㅇㅇ 이ㅇㅇ 홍ㅇㅇ
                        </AwardText>
                        <AwardText>
                            디지털 콘텐츠 경진대회 은상
                            <br />
                            김ㅇㅇ
                        </AwardText>
                        <AwardText>
                            스마틴 앱 챌린지 장려상
                            <br />
                            강ㅇㅇ 김ㅇㅇ 박ㅇㅇ 박ㅇㅇ 박ㅇㅇ
                        </AwardText>
                        <Year>2018</Year>
                        <AwardText>
                            모바일 콘텐츠 경진대회 대상
                            <br />
                            김ㅇㅇ
                        </AwardText>
                        <AwardText>
                            모바일 콘텐츠 경진대회 금상
                            <br />
                            이ㅇㅇ
                        </AwardText>
                        <AwardText>
                            모바일 콘텐츠 경진대회 은상
                            <br />
                            최ㅇㅇ 유ㅇㅇ
                        </AwardText>
                        <AwardText>
                            모바일 콘텐츠 경진대회 동상
                            <br />
                            한ㅇㅇ
                        </AwardText>
                        <AwardText>
                            선린해커톤 금상
                            <br />
                            김ㅇㅇ
                        </AwardText>
                        <AwardText>
                            프로그래밍 경시대회 은상
                            <br />
                            이ㅇㅇ
                        </AwardText>
                        <AwardText>
                            프로그래밍 경시대회 동상
                            <br />
                            정ㅇㅇ
                        </AwardText>
                        <AwardText>
                            프로그래밍 경시대회 장려상
                            <br />
                            조ㅇㅇ
                        </AwardText>
                        <AwardText>
                            디지털 콘텐츠 경진대회 응용부문 대상
                            <br />
                            이ㅇㅇ
                        </AwardText>
                        <AwardText>
                            디지털 콘텐츠 경진대회 웹 부문 대상
                            <br />
                            이ㅇㅇ
                        </AwardText>
                        <AwardText>
                            디지털 콘텐츠 경진대회 은상
                            <br />
                            이ㅇㅇ 홍ㅇㅇ
                        </AwardText>
                        <AwardText>
                            디지털 콘텐츠 경진대회 동상
                            <br />
                            김ㅇㅇ 이ㅇㅇ 홍ㅇㅇ
                        </AwardText>
                        <AwardText>
                            제 4회 하이톤: 아이스 최우수상
                            <br />
                            이ㅇㅇ
                        </AwardText>
                        <AwardText>
                            앱잼 VR 15회 동상
                            <br />
                            한ㅇㅇ
                        </AwardText>
                        <AwardText>
                            앱잼 VR 16회 동상
                            <br />
                            한ㅇㅇ
                        </AwardText>
                        <AwardText>
                            대한민국 청소년 게임잼 수상
                            <br />
                            한ㅇㅇ
                        </AwardText>
                        <AwardText>
                            대한민국 청소년 게임잼 해답이 아닌 창작상
                            <br />
                            이ㅇㅇ
                        </AwardText>
                        <AwardText>
                            VR/AR 그랜드 챌린지 수상
                            <br />
                            한ㅇㅇ
                        </AwardText>
                        <AwardText>
                            서울메이커 동상
                            <br />
                            김ㅇㅇ / 김ㅇㅇ
                        </AwardText>
                    </ScrollBox>
                </Content>
            </Layout>
        </Container>
    );
};

export default Award;
