import styled from "styled-components";

export const ContainerScreen = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 120px);
    
    @media only screen and (max-width: 767px) {
        height: calc(100vh - 40px);
        margin: 20px;
    }
`;