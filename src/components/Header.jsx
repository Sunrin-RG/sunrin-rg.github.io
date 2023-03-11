import React from "react";
import styled from "@emotion/styled";

const Layout = styled.header`
    height: 30px;
    position: fixed;
    display: flex;
    align-items: center;
    top: 30px;
    right: 30px;
    gap: 30px;

    @media (max-width: 768px) {
        display: none;
    }
`;

const LinkList = styled.ul`
    display: flex;
    align-items: center;
    gap: 10px;
    height: 100%;
`;

const Link = styled.button`
    list-style: none;
    padding: 10px 20px;
    height: 100%;
    font-size: 16px;
    border: none;
    background: none;
    color: white;
    border-radius: 15px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s ease-in-out;
    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

const ApplyButton = styled.button`
    background-color: var(--rg500);
    padding: 10px 30px;
    height: 100%;
    border-radius: 15px;
    border: none;
    color: #fff;
    font-size: 16px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    transition: 0.2s ease-in-out;
    &:hover {
        opacity: 0.8;
    }
`;

const Header = () => {
    const warp = (num) => {
        return window.scrollTo({
            top: window.innerHeight * num,
            behavior: "smooth",
        });
    };
    return (
        <Layout>
            <LinkList>
                <Link onClick={() => warp(1)}>동아리 소개</Link>
                <Link onClick={() => warp(2)}>커리큘럼</Link>
                <Link onClick={() => warp(3)}>홍보영상</Link>
                <Link onClick={() => warp(4)}>수상실적</Link>
            </LinkList>
            <ApplyButton onClick={() => warp(5)}>지원하기</ApplyButton>
        </Layout>
    );
};

export default Header;
