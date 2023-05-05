import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding-top: 50px; */
    /* background-color: yellow; */
    width: 100%;
    /* overflow: hidden; */
    position: relative;
    margin-top: 50px;
    margin-bottom: 100px;
`

export const PolaroidContainer = styled.div`

    position: absolute;
    width: 55vw;
    height: 41.25vw;
    top: 200px;
    /* right: 1000px; */
    background-color: blue;
    background-image: url("https://media.licdn.com/dms/image/C4D03AQFG8veYIAVSVA/profile-displayphoto-shrink_800_800/0/1660580878755?e=1688601600&v=beta&t=WGKNNolDzZAgtLd4GYCTi3yZgTHJdaIHS6P5PIxxC_E");
    background-size: cover;
    background-position-y: 50%;
`

export const ContentContainer = styled.article`

    width: 60vw;
    font-family: 'Neue Haas Grotesk Display Pro';
    color: #FFFFFF;

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