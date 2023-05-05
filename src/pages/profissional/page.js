import { Container } from './styled.js';
import LineGrid from '../../components/css/lineGrid/component.js';
import InfiniteMarquee from '../../components/css/infiniteMarquee/component.js';

export default function Profissional() {
    return (
        <Container>
            <LineGrid />
            <InfiniteMarquee number={2} text={'Profissional'} />
        </Container>
    )
}