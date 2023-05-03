import { Container } from './styled';
import Header from '../header/component';
import Footer from '../footer/component';

export default function ScreenWithHeader({ children }) {
    return (
        <Container>
            <Header />
            { children }
            <Footer />
        </Container>
    )
}