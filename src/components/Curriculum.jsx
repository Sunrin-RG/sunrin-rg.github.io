import React from "react";
import styled from "@emotion/styled";
import {
    Layout,
    SectionTitle,
    SectionSubtitle,
    SectionContent,
} from "../styles/atomic";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #05071c;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Cur = styled.div`
    display: flex;
    gap: 250px;
`;

const CurContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 55px;
    font-size: 24px;
    @media (max-width: 768px) {
        display: none;
    }
`;

const CT = styled.div`
    color: white;
    margin-top: 55;
    font-size: 24px;
`;

const C = styled.div`
    color: white;
    margin-top: 10px;
    line-height: 150%;
    margin-top: 55;
    font-size: 24px;
    text-align: center;
`;

const Curriculum = () => {
    return (
        <Container>
            <Layout>
                <SectionTitle>curriculum</SectionTitle>
                <SectionSubtitle>★배우게 될 내용★</SectionSubtitle>
                <SectionContent>
                    RG는 체계적인 커리큘럼을 바탕으로
                    <br />
                    개발자는 프로그래밍 언어 / 상용엔진을, 디자이너는 3D 모델링
                    / 게임 원화 / 픽셀아트를,
                    <br />
                    그리고 모든 부원은 게임 기획 이론을 배웁니다.
                </SectionContent>
                <Cur>
                    <CurContent>
                        <CT>개발자</CT>
                        <C>
                            게임 기획 이론 <br />
                            C/C# 문법 <br />
                            Unity 구조와 객체 <br />
                            Unity 2D/3D <br />
                            C++
                        </C>
                    </CurContent>
                    <CurContent>
                        <CT>디자이너</CT>
                        <C>
                            게임 기획 이론 <br />
                            드로잉
                            <br />
                            도트 그래픽 <br />
                            애니메이션 <br />
                            UI/UX <br />
                            3D 모델링
                        </C>
                    </CurContent>
                </Cur>
            </Layout>
        </Container>
    );
};

export default Curriculum;
