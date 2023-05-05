import styled from 'styled-components';

export const Container = styled.div`
    backdrop-filter: saturate(180%) blur(20px);
    background: rgba(29,29,31,.72);
    height: 48px;
    position: fixed;
    z-index: 5;
    max-width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .logoname-anchor {
        text-decoration: none;
        background-color: #b46633;
        padding-right: 50px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease-in;
    }

    .logoname-anchor:hover {
        background-color: rgba(29,29,31,.72);
        transition: all 0.1s ease-in;
    }

    .logoname-anchor:hover .logoname {
        color: #b46633;
        color: white;
    }

    .logoname {
        color: #ffffff;
        font-family: 'Neue Haas Grotesk Display Pro', 'texgyreheros';
        font-weight: bold;
        font-size: 20px;
        text-shadow: 0 0 2px black;
        margin-left: 10px;
        margin-top: 2px;
    }

    .logoname-anchor span {
        display: inline-block;
        transform: scaleX(1);
        transition: all 0.07s ease-in
    }

    .logoname-anchor:hover span.reverse {
        display: inline-block;
        transform: scaleX(-1);
        transition: all 0.07s ease-in
    }

    .anchors {
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .anchor {
        color: #ffffff;
        font-family: texgyreheros;
        font-weight: bold;
        font-size: 15px;
        width: 100px;
        text-shadow: 0 0 2px black;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
        height: 100%;
        transition: all 0.3s ease-in;
        position: relative;
    }

    .anchor:hover {
        background-color: rgba(29,29,31,.72);
        transition: all 0.1s ease-in;
    }

    .anchor:hover span {
        /* text-decoration: underline; */
    }   

    .anchor sub {
        vertical-align: sub;
        font-size: smaller;
        color: #b46633;
    }

    .anchor:hover sub {
        text-decoration: none;
    }

    .anchor-div {
        width: 50px;
        height: 3px;
        background-color: transparent;
        position: absolute;
        bottom: 0;
        margin: 0 auto;
        transition: all 0.3s ease-in;
    }

    .anchor:hover .anchor-div {
        background-color: #b46633;
        transition: all 0.1s ease-in;
    }
`

