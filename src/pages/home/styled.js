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
    margin-top: 120px;
    margin-bottom: 700px;
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
        font-size: 75px;
        font-weight: 600;
        text-align: left;
        margin-bottom: 35px;
    }

    & p {
        /* font-family: 'SF Pro Display';
        letter-spacing: 2px; */
        font-family: 'JetBrains Mono';
        /* letter-spacing: 4px; */
        font-size: 20px;
        line-height: normal;
        text-indent: 48px;
        text-align: ;
        /*text-justify: inter-word; */
    }
`

export const MarqueeContainer = styled.section`

    width: 100%;
    position: absolute;
    top: 40px;
    left: 0;

    /* Marquee styles */
    .marquee {
        /* --gap: 1rem; */
        --gap: 0.01rem;
        position: relative;
        display: flex;
        overflow: hidden;
        user-select: none;
        gap: var(--gap);

        & li {
            display: flex;
            align-items: center;
            gap: 1.2vw;
        }

        & .number {
            border-radius: 50%;
            background-color: #000;
            height: 60px;
            width: 60px;
            font-weight: 600;
            font-size: 50px;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
  
    .marquee__content {
        flex-shrink: 0;
        display: flex;
        justify-content: space-around;
        gap: var(--gap);
        min-width: 100%;
    }
  
    @keyframes scroll {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(calc(-100% - var(--gap)));
        }
    }
  
    /* Enable animation */
    .enable-animation .marquee__content {
        animation: scroll 100s linear infinite;
    }

    /* Pause on hover */
    .marquee--hover-pause:hover .marquee__content {
        animation-play-state: paused;
    }

    /* Other page demo styles */
    .marquee__content > * {
        /* flex: 0 0 auto; */
        color: white;
        font-size: 20px;
        font-family: 'Neue Haas Grotesk Display Pro';
        font-size: 7.5vw;
        font-weight: bold;
        /* background: dodgerblue; */
        margin: 0px;
        /* padding: 1rem 2rem; */
        margin-left: 1.2vw;
        /* border-radius: 0.25rem; */
        text-align: center;
    }

    .marquee {
        /* border: 2px dashed lightgray; */
    }
`