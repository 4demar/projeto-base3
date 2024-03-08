import styled from "styled-components";

export const Container = styled.header`
   background: var(--blue);
`;

export const Content = styled.div`
   margin: 0 auto;
   height: 10rem;
   
   display: flex;
   align-items: center; //alinhamento vertical
   justify-content: center; //alinhamento horizontal

   .tamanho-logotipo {
      height: 6rem;
   }

   .rotacao_logo {
      transform: rotate(360deg);
      animation: App-logo-spin infinite 10s linear;
   }
      
`;