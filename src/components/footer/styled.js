import styled from 'styled-components';

export const Container = styled.div`

    height: fit-content;
    /* font-family: texgyreheros; */
    font-family: 'Neue Haas Grotesk Display Pro';
    width: 80vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2px;

    .footer-bottom-container {
        display: flex;
        justify-content: space-between;
        gap: 2px;
    }
`

export const TopBlock = styled.div`

    width: 100%;
    height: 250px;
    background-color: #b46633;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    /* font-family: 'SF Pro Display'; */
    /* font-family: 'Neue Haas Grotesk Display Pro'; */

    .footer-socials {
        box-sizing: border-box;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 20px;
        /* width: 450px; */
        width: 405px;
        height: 100%;
        display: flex;
        flex-flow: column wrap;
        /* justify-content: flex-start; */
        /* background-color: blue; */
        /* gap: 12px; */
        row-gap: 12px;
        column-gap: 0px;
    }

    .footer-social {
        
        /* border: 1px solid black; */
        width: fit-content;
        /* background-color: red; */
        
        & a {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 12px;
            text-decoration: none;
        }

        & p {
            font-family: 'SF Pro Display';
            font-weight: 500;
            font-weight: bold;
            font-size: 22px;
            color: #000;
            /* display: none; */
        }

        &:hover p {
            color: lightgray;
        }
    }

    .footer-social svg {
        height: 45px;
        width: min-content;
    }

    .footer-social path {
        fill: rgb(20,20,20);
    }

    .footer-social:hover path {
        fill: lightgray;
    }
`

export const Block = styled.div`

    width: 100%;
    height: 100px;
    background-color: #b46633;
    margin: 0 auto;

    &.bloco1 {
        box-sizing: border-box;
        font-weight: 600;
        padding: 15px;
        display: flex;
        align-items: flex-end;
    }

    &.bloco2 {
        box-sizing: border-box;
        font-weight: 600;
        font-size: 25px;
        padding: 15px;
        padding-bottom: 21px;
        display: flex;
        justify-content: center;
        align-items: flex-end;

        &.bloco2 a {
            text-decoration: none;
            color: #000;
        }

        &.bloco2 a:hover {
            text-decoration: underline;
        }
    }

    &.bloco3 {
        box-sizing: border-box;
        font-weight: 900;
        padding: 15px;
        font-size: 20px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        text-align: right;

        &.bloco3 a {
            text-decoration: none;
            color: #000;
        }

        &.bloco3 svg {
            height: 50px;
            position: relative;
            top: 8px;
            width: fit-content;
        }

        &.bloco3 .my-logo {
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            text-align: right;
        }
    }
`