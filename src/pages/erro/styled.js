import styled from "styled-components"

export const Container = styled.div`

    width: 60vw;
    font-family: 'Neue Haas Grotesk Display Pro';
    color: #FFFFFF;
    margin: 50px auto 100px; 

    & h1 {
        font-size: 105px;
        font-weight: 600;
        text-align: left;
        margin-bottom: 35px;
        color: #4b6633;
    }

    & p {
        font-family: 'JetBrains Mono';
        font-size: 20px;
        line-height: normal;
        text-align: left;
    }

    & p span {
        font-size: 35px
    }

    & p a {
        color: mediumPurple;
    }
`