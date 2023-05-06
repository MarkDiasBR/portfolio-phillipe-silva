import ResetStyle from './style/ResetStyle';
import GlobalStyle from './style/GlobalStyle';
import ScreenWithHeaderAndFooter from './components/screenWithHeaderAndFooter/component';
// import Home from './pages/home/page';
import Portfolio from './pages/portfolio/page';
import Experiencia from './pages/experiencia/page';
import Sobre from './pages/sobre/page';
import Contato from './pages/contato/page';
// import Metadata from './pages/metadata/page';
import Erro from './pages/erro/page';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


import styled from 'styled-components';


function App() {
    return (
        <Container>
            <ResetStyle />
            <GlobalStyle />
            <BrowserRouter>
                <ScreenWithHeaderAndFooter>
                    <Routes>
                        <Route path='/' element={ <Navigate to="/home" /> }/>
                        {/* <Route path='/home' element={<Home />} /> */}
                        <Route path='/portfolio' element={<Portfolio />} />
                        <Route path="/sobre" element={<Sobre />} />
                        <Route path="/experiencia" element={<Experiencia />} />
                        <Route path="/contato" element={<Contato />} />
                        {/* <Route path="/metadata" element={<Metadata />} /> */}
                        <Route path="*" element={<Erro />} />
                    </Routes>
                </ScreenWithHeaderAndFooter>               
            </BrowserRouter>      
        </Container>
    );
}

export default App;

const Container = styled.div`


`