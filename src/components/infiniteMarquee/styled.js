import styled from "styled-components";

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
            /* text-shadow: 0 0 3px black; */
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
            /* box-shadow: 0 0 3px black; */
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