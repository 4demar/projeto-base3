import styled from 'styled-components';

export const Item = styled.div`
    border: 1px solid #555;
    padding: 10px;
    border-radius: 5px;
    margin: 10px 0;
    align-items: center;
    display:flex;

    .image{
        margin-right:5px;
        cursor: pointer;
    }
    input{
        border: 0px;
        background-color: transparent;
        outline: 0;
        color: #FFF;
        font-size: 18px;
        flex: 1;
    }
    label {
        color: #CCC;
    }

`;


export const Container = styled.div`
    background-color: #17181F;
    color: #797A81;
    min-height: 100vh;
`
export const Area = styled.div`
    margin:auto;
    padding: 10px;
    max-width: 980px;
`;

export const Header = styled.h1`
    margin:0;
    padding:0;
    color: #FFF;
    text-align: center;
    border-bottom: 1px solid #444;
    padding-bottom: 10px;
`;