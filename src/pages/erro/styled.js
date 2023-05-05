import styled from "styled-components"

export const Container = styled.div`

    width: 60vw;
    font-family: 'Neue Haas Grotesk Display Pro';
    color: #FFFFFF;
    /* margin-top: 50px;
    margin-bottom: 700px; */
    margin: 50px auto 100px; 

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
        /* text-indent: 48px; */
        text-align: left;
        /*text-justify: inter-word; */
    }

    & p span {
        font-size: 35px
    }

    & p a {
        color: mediumPurple;
    }
`