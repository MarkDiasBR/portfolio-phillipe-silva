import { Container } from './styled.js';

export default function PortfolioItem({ url }) {
    return (
        <Container>
            <img className='portfolio-item-img' src={url} alt='Item' />
            <div className='portfolio-item-filter'>
                <p className='portfolio-item-filter-title'>Lives | Salvador FM</p>
                <p className='portfolio-item-filter-subtitle'>Descrição breve do card</p>
            </div>
        </Container>
    )
}