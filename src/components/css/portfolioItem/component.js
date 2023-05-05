import { Container } from './styled.js';

export default function PortfolioItem({ url, title, subtitle }) {
    return (
        <Container>
            <img className='portfolio-item-img' src={url} alt='Item' />
            <div className='portfolio-item-filter'>
                <p className='portfolio-item-filter-title'>{title}</p>
                <p className='portfolio-item-filter-subtitle'>{subtitle}</p>
            </div>
        </Container>
    )
}