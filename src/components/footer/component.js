import { Container, TopBlock, Block } from './styled';
import { Link } from 'react-router-dom';
import { SvgFacebook, SvgTwitter, SvgInstagram, SvgSpotify, SvgBehance, SvgLinkedIn, SvgDownload } from '../../assets/svg/socialMedia.js';
import { SvgReact, SvgReactFill, SvgCSS, SvgHTML, SvgJS, SvgReactSpring } from '../../assets/svg/technologies.js'

export default function Footer() {
    return (
        <Container>
            <TopBlock>
                <div className='footer-socials'>
                    <div className='footer-social'>
                        <a href='https://www.linkedin.com/in/phillipesilva/' target='_blank' rel='noopener noreferrer'>
                            <SvgLinkedIn />
                            {/* <p>@phillipesilva</p> */}
                            <p>LinkedIn</p>
                        </a>
                    </div>
                    <div className='footer-social'>
                        <a href='https://www.instagram.com/phillipesilva_/' target='_blank' rel='noopener noreferrer'>
                            <SvgInstagram />
                            {/* <p>@phillipesilva_</p> */}
                            <p>Instagram</p>
                        </a>
                    </div>
                    <div className='footer-social'>
                        <a href='https://twitter.com/PhillipeSilva' target='_blank' rel='noopener noreferrer'>
                            <SvgTwitter />
                            {/* <p>@PhillipeSilva</p> */}
                            <p>Twitter</p>
                        </a>
                    </div>
                    <div className='footer-social'>
                        <a href='https://pt-br.facebook.com/PhillipeSilva' target='_blank' rel='noopener noreferrer'>
                            <SvgFacebook />
                            {/* <p>@PhillipeSilva</p> */}
                            <p>Facebook</p>
                        </a>
                    </div>
                    <div className='footer-social'>
                        <a href='https://www.behance.net/phillipesilva' target='_blank' rel='noopener noreferrer'>
                            <SvgBehance />
                            {/* <p>@phillipesilva</p> */}
                            <p>Behance</p>
                        </a>
                    </div>
                    <div className='footer-social'>
                        <a href='https://open.spotify.com/user/phillipesilva?si=WIoKANCORKeuLDrsWxsR_g' target='_blank' rel='noopener noreferrer'>
                            <SvgSpotify />
                            {/* <p>@phillipesilva</p> */}
                            <p>Spotify</p>
                        </a>
                    </div>

                    <div className='footer-social'>
                        <a href='https://www.behance.net/phillipesilva' target='_blank' rel='noopener noreferrer'>
                            <SvgDownload />
                            {/* <p>@phillipesilva</p> */}
                            <p>Curriculum</p>
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
                        <Link to="/metadata">
                            <SvgReactFill />
                        </Link>
                        <p><a href="https://github.com/MarkDiasBR">MarkDias<br/>/WebDev</a></p>
                    </div>
                </Block>
            </div>
        </Container>
    )
}