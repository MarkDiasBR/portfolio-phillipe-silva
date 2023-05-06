import LineGrid from '../../components/lineGrid/component.js';
import InfiniteMarquee from '../../components/infiniteMarquee/component.js';
import JobsContainer from '../../components/jobsContainer/component.js';
import JobItem from '../../components/jobItem/component.js';
import { Container, ContentContainer } from './styled.js';

export default function Experiencia() {
    return (
        <Container>
            <LineGrid />
            <InfiniteMarquee number={2} text={'Experiência'} />
            <ContentContainer>
                <h1>
                    Vivência profissional
                </h1>
                <JobsContainer>
                    <JobItem 
                        url={'https://media.licdn.com/dms/image/C4D0BAQH4lvcwzAKN4g/company-logo_200_200/0/1649460322714?e=1691625600&v=beta&t=vbAaLnyEJa3A-N7h1eh5x46UgQ4QM_pjy6WwJ16AKjM'}
                        title={'Coordenador Digital'}
                        subtitle={'Salvador FM · Full-time'}
                        period={'desde dez. 2022 · 6 meses'}
                        location={'Salvador, Brasil · On-site'}
                    />
                    <JobItem 
                        url={'https://media.licdn.com/dms/image/D4D0BAQFIhWtKJee7NA/company-logo_200_200/0/1682360210807?e=1691625600&v=beta&t=LKVzbms7uUHNQycCgKf_MMhz5fhwC70BZpJHYQHNGBc'}
                        title={'Diretor de Arte'}
                        subtitle={'Agência Gamboa · Full-time'}
                        period={'jul. 2022 - dec. 2022 · 6 meses'}
                        location={'Salvador, Brasil · On-site'}
                    />
                    <JobItem 
                        url={'https://media.licdn.com/dms/image/C4D0BAQH4lvcwzAKN4g/company-logo_200_200/0/1649460322714?e=1691625600&v=beta&t=vbAaLnyEJa3A-N7h1eh5x46UgQ4QM_pjy6WwJ16AKjM'}
                        title={'Digital'}
                        subtitle={'Salvador FM · Full-time'}
                        period={'set. 2020 - jul. 2022 · 1 ano e 11 meses'}
                        location={'Salvador, Brasil · On-site'}
                    />
                    <JobItem 
                        url={'https://scontent.fssa23-1.fna.fbcdn.net/v/t39.30808-6/293300828_560815022497168_6902810964190762566_n.png?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3eZ-pERPGmYAX9Bx_2W&_nc_ht=scontent.fssa23-1.fna&oh=00_AfBKaamsvsPxTZRzSCwn0_GL-_3RGfPyy-T84nCbK2MhNQ&oe=645A801B'}
                        title={'Assistente de Computação Gráfica'}
                        subtitle={'Agência Gamboa · Full-time'}
                        period={'ago 2020 a-set 2020 · 2 meses'}
                        location={'Salvador, Brasil · On-site'}
                    />
                    <JobItem 
                        url={'https://media.licdn.com/dms/image/C4E0BAQEGNx298isdCQ/company-logo_200_200/0/1559852293824?e=1691625600&v=beta&t=7HBS9lFIY9WXvFnryAJuGxc8oK9fi-YoTBNNOHOLSyQ'}
                        title={'Diretor de Arte'}
                        subtitle={'FitDance · Full-time'}
                        period={'nov. 2019 - ago. 2020 · 10 meses'}
                        location={'Salvador, Brasil · On-site'}
                    />
                    <JobItem 
                        url={'https://media.licdn.com/dms/image/C4D0BAQH25ZcItNprzQ/company-logo_200_200/0/1642725191138?e=1691625600&v=beta&t=9atIwUHK1RAIrhtjKqihz7OUYkb45zkiXO8FgSp5pWg'}
                        title={'Analista de Marketing'}
                        subtitle={'Piatã FM · Full-time'}
                        period={'mar. 2017 - nov. 2019 · 2 anos e 9 meses'}
                        location={'Salvador, Brasil · On-site'}
                    />
                    <JobItem 
                        url={'https://media.licdn.com/dms/image/C4D0BAQH25ZcItNprzQ/company-logo_200_200/0/1642725191138?e=1691625600&v=beta&t=9atIwUHK1RAIrhtjKqihz7OUYkb45zkiXO8FgSp5pWg'}
                        title={'Estagiário'}
                        subtitle={'Piatã FM · Part-time'}
                        period={'jan. 2016 - mar. 2017 · 1 ano e 3 meses'}
                        location={'Salvador, Brasil · On-site'}
                    />
                    <JobItem 
                        url={'https://media.licdn.com/dms/image/C4D0BAQFzRQfSaag54A/company-logo_200_200/0/1591208126052?e=1691625600&v=beta&t=sPFspAO2OfXVfoPlA0r2KUKeAC1SVAE38GwtS2ocRC0'}
                        title={'Estagiário'}
                        subtitle={'Rede Bahia · Part-time'}
                        period={'out. 2014 - jan. 2016 · 1 ano e 3 meses'}
                        location={'Salvador, Brasil · On-site'}
                    />
                    <JobItem 
                        url={'https://www.gleb.org.br/storage/2019/01/29/6bd19136b16188db34a4083e0c08f3787f247430.'}
                        title={'Conselheiro de Comunicações'}
                        subtitle={'Grande Loja Maçônica da Bahia · Part-time'}
                        period={'mai. 2014 - set. 2014 · 5 meses'}
                        location={'Salvador, Brasil · On-site'}
                    />
                </JobsContainer>
            </ContentContainer>
        </Container>
    )
}