import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);

`;

export const Content = styled.div`
   
    
    margin: 0 auto;
    height: 220px;
    display: flex;
    align-items: center; //alinhamento vertical
    justify-content: center; //alinhamento horizontal

    img {
        max-width: 100vh;
        max-height: 100px;

    }
`;