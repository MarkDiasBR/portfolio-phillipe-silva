import styled from 'styled-components';

export const Container = styled.div`
    /* background-color: blue; */
    position: relative;
    border-left: 3px solid rgb(20,20,20);
    transition: border-color 0.3s ease;

    &:hover {
        border-color: rgba(211,211,211,0.5);
        transition: border-color 0.1s ease;
    }

    &:hover > div:first-child {
        /* background-color: yellow; */
        background-color: lightgray;
        transition: background-color 0.1s ease;
        box-shadow: 0 0 5px black;
        transition: box-shadow 0.1s ease;
    }

    &:first-child > div:first-child {
        width: 14px;
        height: 14px;
        top: -7px;
        left: -8.5px;
    }
`

export const Badge = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgb(20,20,20);
    transition: background-color 0.3s ease;
    box-shadow: none;
    transition: box-shadow 0.3s ease;
    
    position: absolute;
    top: -5px;
    left: -6.5px;
`

export const ContentContainer = styled.div`
    background-color: white;
    box-shadow: 0 0 5px black;
    border-radius: 3px;
    display: flex;
    gap: 2vw;
    margin-top: 2vw;
    margin-bottom: 2vw;
    margin-left: 2vw;
    padding: 2vw;

    img {
        width: 10vw;
        height: 10vw;
        border-radius: 50%;
        box-shadow: 0 0 3px black;
        object-fit: cover;
        object-position: center center;
    }

    .job-item-text {
        margin-top: 0.6vw;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    h1 {
        color: rgb(20,20,20);
        font-size: 30px;
        /* font-family: 'Neue Haas Grotesk Display Pro'; */
        font-family: 'SF Pro Display';
        /* font-family: 'JetBrains Mono'; */
        font-weight: 800;
    }

    h2 {
        color: rgb(20,20,20);
        font-size: 20px;
        /* font-family: 'Neue Haas Grotesk Display Pro'; */
        font-family: 'SF Pro Display';
        /* font-family: 'JetBrains Mono'; */
        font-weight: 500;
    }

    p {
        font-size: 18px;
        color: rgba(0,0,0,0.6);
        /* font-size: 40px; */
        /* font-family: 'Neue Haas Grotesk Display Pro'; */
        font-family: 'SF Pro Display';
        /* font-family: 'JetBrains Mono'; */
        /* font-weight: 600; */
    }
`