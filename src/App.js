import ResetStyle from './style/ResetStyle'
import GlobalStyle from './style/GlobalStyle'
import styled from 'styled-components';
import Home from './pages/home/page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScreenWithHeaderAndFooter from './components/screenWithHeaderAndFooter/component';

function App() {
    return (
        <Container>
            <ResetStyle />
            <GlobalStyle />
            <ScreenWithHeaderAndFooter>
                 <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>               
            </ScreenWithHeaderAndFooter>       
        </Container>
    );
}

export default App;

const Container = styled.div`


`