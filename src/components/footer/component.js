import { Container, TopBlock, Block } from './styled';
import { Link } from 'react-router-dom';
import { SvgFacebook, SvgTwitter, SvgInstagram, SvgSpotify, SvgPinterest } from '../../assets/svg/socialMedia.js';
import { SvgReact, SvgReactFill } from '../../assets/svg/technologies.js'

export default function Footer() {
    return (
        <Container>
            <TopBlock>
                <div className='footer-socials'>
                    <div className='footer-social'>
                        <a href='https://pt-br.facebook.com/PhillipeSilva' target='_blank'>
                            <SvgFacebook />
                            <p>@Phillipe Silva</p>
                        </a>
                    </div>
                    <div className='footer-social'>
                        <a href='https://twitter.com/PhillipeSilva' target='_blank'>
                            <SvgTwitter /> 
                        </a>
                    </div>
                    <div className='footer-social'>
                        <a href='https://www.instagram.com/phillipesilva95/' target='_blank'>
                            <SvgInstagram /> 
                        </a>
                    </div>
                    <div className='footer-social'>
                        <a href='https://open.spotify.com/user/phillipesilva?si=WIoKANCORKeuLDrsWxsR_g' target='_blank'>
                            <SvgSpotify /> 
                        </a>
                    </div>
                </div>
            </TopBlock>
            <div className="footer-bottom-container">
                <Block className='bloco1'>
                   <p>© 2023 Phillipe Silva<br/>
                   Todos os direitos reservados</p>
                </Block>
                <Block className='bloco2'>
                    <a href="mailto:phillipeshsilva@gmail.com">phillipeshsilva@gmail.com</a>
                </Block>
                <Block className='bloco3'>
                    
                    <div className='my-logo'>
                        <SvgReactFill />
                        <p><a href="https://github.com/MarkDiasBR">MarkDias<br/>/WebDev</a></p>
                    </div>
                </Block>
            </div>
        </Container>
    )
}