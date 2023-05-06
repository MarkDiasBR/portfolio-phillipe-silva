import { Container } from './styled.js';
import LineGrid from '../../components/lineGrid/component.js';
import InfiniteMarquee from '../../components/infiniteMarquee/component.js';

export default function Contato() {
    return (
        <Container>
            <LineGrid />
            <InfiniteMarquee number={4} text={'Contato'} />
        </Container>
    )
}