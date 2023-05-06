import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    /* padding-top: 50px; */
    background-color: yellow;
    width: 100%;
    /* overflow: hidden; */
    position: relative;
    margin-top: 50px;
    margin-bottom: 260vw;
    /* height: 700px; */

    & .line-grid {
        margin-bottom: 0;
    }
`

export const ContentContainer = styled.article`
    box-sizing: border-box;
    padding: 3.5vw;
    /* margin-bottom: 1000px; */
    width: 70vw;
    font-family: 'Neue Haas Grotesk Display Pro';
    color: #FFFFFF;
    /* background-color: blue; */
    background-color: #4b6633;
    position: absolute;
    top: 200px;
    box-shadow: 0 0 3px black;
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center; */
    display: grid;
    grid-template-columns: repeat(auto-fill, 30vw);
    justify-content: space-between;
    grid-row-gap: 3.5vw;

    /* &::after {
        content: '';
        flex: auto;
    } */

    & h1 {
        font-size: 105px;
        font-weight: 600;
        text-align: left;
        margin-bottom: 35px;
        /* color: gray; */
        color: #4b6633;
    }

    & p {
        /* font-family: 'SF Pro Display';
        letter-spacing: 2px; */
        font-family: 'JetBrains Mono';
        /* letter-spacing: 4px; */
        font-size: 20px;
        line-height: normal;
        text-indent: 48px;
        text-align: left;
        /*text-justify: inter-word; */
    }
`