import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    /* padding-top: 50px; */
    /* background-color: yellow; */
    width: 100%;
    /* overflow: hidden; */
    position: relative;
    margin-top: 50px;
    margin-bottom: 260vw;

    & .line-grid {
        margin-bottom: 0;
    }
`

export const ContentContainer = styled.div`
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
    display: flex;
    justify-content: center;
`