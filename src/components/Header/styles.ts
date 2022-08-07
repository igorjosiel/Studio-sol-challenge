import styled from "styled-components";

export const Container = styled.div`
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

export const Text = styled.h1`
    margin-bottom: 0px;
    font-size: 2.2rem;
    font-weight: 700;
    text-align: center;
    background: linear-gradient(174.92deg, #ef6c00 18.47%, #db6300 36.57%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -1px;
`;

export const Divider = styled.hr`
    width: 255px;
    border-top: 1px solid #cfcfcf;
    margin: 18px auto;
    background: #CFCFCF;
`;