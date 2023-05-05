import styled from 'styled-components';

export const Container = styled.div`
    /* width: 40%; */
    /* height: 100px; */
    /* overflow: hidden; */
    /* background-color: blue; */
    /* background-image: url(${props => props.url}); */
    /* background-size: auto; */
    position: relative;

    & img.portfolio-item-img {
        width: 30vw;
        height: 22.5vw;
        border-radius: 5px;
        object-fit: cover;
        object-position: center center;
        box-shadow: 0 0 4px black;
    }

    & div.portfolio-item-filter {
        box-sizing: border-box;
        width: 30vw;
        height: 22.5vw;
        border-radius: 5px;
        background-image: linear-gradient(to top,rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0));
        position: absolute;
        top: 0;
        right: 0;
        opacity: 0;
        transition: opacity 0.2s ;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        gap: 0.5vw;
        padding: 1vw;

        p.portfolio-item-filter-title {
            text-indent: 0;
            font-size: 25px;
            font-weight: 600;
            /* background-color: yellow; */
        }

        p.portfolio-item-filter-subtitle {
            /* font-family: 'Neue Haas Grotesk Display Pro'; */
            font-size: 16px;
            text-indent: 0;
            /* background-color: yellow; */
        }
    }

    &:hover div.portfolio-item-filter {
        opacity: 1;
    }

`