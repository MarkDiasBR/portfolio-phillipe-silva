import { Container, Badge, ContentContainer } from './styled.js';


export default function JobItem({ url, title, subtitle, period, location }) {
    return (
        <Container>
            <Badge />
            <ContentContainer>
                <img src={url} alt='Empresa' />
                <div className='job-item-text'>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <p>{period}</p>
                    <p>{location}</p>
                </div>
            </ContentContainer>
        </Container>
    )
}