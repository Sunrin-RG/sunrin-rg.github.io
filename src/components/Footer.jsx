import React from "react";
import styled from "@emotion/styled";
import Logo from "../assets/rg로고.png";

const Layout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 180px;
    background: #05071c;
    padding: 50px;
    @media (max-width: 768px) {
        height: 100px;
        padding: 40px;
    }
`;

const Text = styled.div`
    color: white;
    font-size: 19px;
    line-height: 160%;
    @media (max-width: 768px) {
        font-size: 14px;
        align-self: center;
    }
`;

const Im = styled.img`
    width: 75px;
    @media (max-width: 768px) {
        width: 40px;
    }
`;

const Footer = () => {
    return (
        <Layout>
            <Text>
                Develope by 주현명 <br />
                Design by 장운지
            </Text>
            <Im src={Logo} alt="logo" />
        </Layout>
    );
};

export default Footer;
