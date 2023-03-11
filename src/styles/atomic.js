import styled from "@emotion/styled";

export const Layout = styled.div`
    width: 1170px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SectionTitle = styled.div`
    font-family: "Berlin Sans FB Demi";
    font-size: 76px;
    color: white;
    @media (max-width: 768px) {
        font-size: 50px;
    }
`;

export const SectionSubtitle = styled.div`
    margin-top: 10px;
    color: white;
    @media (max-width: 768px) {
        font-size: 20px;
        font-weight: 400;
    }
`;

export const SectionContent = styled.div`
    margin-top: 50px;
    margin-top: 78px;
    font-weight: 400;
    font-size: 27px;
    line-height: 176%;
    /* or 48px */

    text-align: center;
    letter-spacing: -0.08em;

    color: rgba(255, 255, 255, 0.8);
    @media (max-width: 768px) {
        font-size: 16px;
        font-weight: 400;
    }
`;
