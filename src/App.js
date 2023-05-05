import ResetStyle from './style/ResetStyle'
import GlobalStyle from './style/GlobalStyle'
import styled from 'styled-components';
import Home from './pages/home/page';
import Metadata from './pages/metadata/page';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScreenWithHeaderAndFooter from './components/screenWithHeaderAndFooter/component';

function App() {
    return (
        <Container>
            <ResetStyle />
            <GlobalStyle />
            <BrowserRouter>
                <ScreenWithHeaderAndFooter>
                    <Routes>
                        <Route path='/' element={ <Navigate to="/sobre" /> }/>
                        <Route path="/sobre" element={<Home />} />
                        <Route path="/metadata" element={<Metadata />} />
                    </Routes>
                </ScreenWithHeaderAndFooter>               
            </BrowserRouter>      
        </Container>
    );
}

export default App;

const Container = styled.div`


`