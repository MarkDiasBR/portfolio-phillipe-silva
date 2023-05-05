import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
    body {
        background-color: rgb(20,20,20);
        max-width: 100vw;
        
        &::-webkit-scrollbar {
        display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        & {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        }
    }
    
`

export default GlobalStyle;