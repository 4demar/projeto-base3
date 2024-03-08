import styled from "styled-components";

export const Item = styled.div`
   display: flex;
   padding: 0;
   margin: 0;
   border: 1px solid #CCC;
   border-radius: 4px;
   color: #FFF;

   input {
      width: 100%;
      border: none;
      padding: 0.375em 0.75em;

      &:focus {
         outline: 0;
      }
   }

   i {
      border: none;
      cursor: pointer;
      padding: 0.325em 0.6em;
      align-items: center;
      font-size: 1rem;
      background-color: #FFF;
      svg {
         font-size: 1.15em;
         fill: rgba(156, 156, 156, 1);
      }
   }

   .react-datepicker-popper {
      z-index: 10;
      margin-left: -1px;
      margin-top: 1px;
      
   }


`;


