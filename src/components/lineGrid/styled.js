import styled from 'styled-components';

export const Container = styled.div`

    .line-grid {
        width: 1132px;
        position: relative;
        margin-bottom: 35vw;
    }
    
    .x-lines {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    
    .x-line {
        height: 1px;
        background: #4b6633;
    }
    
    .y-lines {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        display: flex;
        gap: 28px;
        justify-content: space-between;
    }
    
    .y-line {
        height: 100%;
        width: 1px;
        background: #4b6633;
    }    
`