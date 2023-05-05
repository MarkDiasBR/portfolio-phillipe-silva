import { Container, TopBlock, Block } from './styled';
import { Link } from 'react-router-dom';
import { SvgFacebook, SvgTwitter, SvgInstagram, SvgSpotify, SvgBehance, SvgLinkedIn, SvgDownload, SvgWhatsApp } from '../../assets/svg/socialMedia.js';
import { SvgReact, SvgReactFill, SvgCSS, SvgHTML, SvgJS, SvgReactSpring } from '../../assets/svg/technologies.js'
import { SvgLocation, SvgTrip } from '../../assets/svg/misc.js';

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
                        <a href='https://api.whatsapp.com/send?phone=5571982875252&text=Ol%C3%A1%2C%20Phillipe!%20Venho%20do%20seu%20site%2C%20quero%20saber%20mais%20sobre%20seu%20trabalho.' target='_blank' rel='noopener noreferrer'>
                            <SvgWhatsApp />
                            {/* <p>@phillipesilva</p> */}
                            <p>WhatsApp</p>
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
                        <a href='https://www.linkedin.com/ambry/?x-li-ambry-ep=AQIZ_qmnVEGzIQAAAYfqzaJXO9ps22F5OZyx9KdNriGrVmHZUxR7AN8_VLI4BBmJPEfnxYF6QfcPan0V6CS0n1VkHymzdRNWF-9vd9-KVOw0nVEsFSBt3bajoQyT87WBhb6os-rOkMsVeCE6OsPVtoIGrC6Vd-1VoAYHrdrR86vZf0541JO6ahVYp9Pk_B38CB_Le0idgV45qbrXVRwEDc5cdJ3f5CBX2sKr66nT93op-xUvn2G_90gc0gGOlkceyZ79IcY9pubSSVKE7ZV4cQqNqafoLJk2rZPtQ9pHReSHOiJMJ5ZDblbhLTzDO1Tqc-iQd0azuw9z3JMiZJ2BHrdzlAO9F-4jxSvCdqWze4c1twAmWHDikIBtR54HGkXv028fgobm-zcSYSKn8DtEmEdbdG4vu4GNlpz9cKO1r77yRQqmON9zUI9kdiZWF4UdR9VfvYJlmXIlPvnaEpQzJTahG0-oRG7G-kHk5v-K_0vKXKX03QEbMUBfUldoUQ-6vNjvE2iOELsW2PFGihkIvLtIwU5fBbsdTN2JAOGwhRktAL6JELbFLii2xPz56IrQgDLLWg&x-ambry-um-filename=Profile.pdf' target='_blank' rel='noopener noreferrer'>
                            <SvgDownload />
                            {/* <p>@phillipesilva</p> */}
                            <p>Currículo</p>
                        </a>
                    </div>

                </div>
                <div className="footer-polaroid">
                    <img src="https://mir-s3-cdn-cf.behance.net/user/115/99f68514068957.5df8e14519165.jpg" />
                    <div className="footer-polaroid-line1">
                        <SvgLocation /><p>Salvador/BA, Brasil</p>
                    </div>
                    <div className="footer-polaroid-line2">
                        <SvgTrip /><p>  Aberto à realocação</p>
                    </div>
                </div>
            </TopBlock>
            <div className="footer-bottom-container">
                <Block className='bloco1'>
                    <div className='footer-flags'>
                        <img src="https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiragrande.jpg/@@images/image" />
                        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/800px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" /> */}
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/750px-Bandera_de_Espa%C3%B1a.svg.png" />
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png?20151118161041" />
                    </div>
                    <p>© 2023 Phillipe Silva<br />
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
                        <p><a href="https://github.com/MarkDiasBR">MarkDias<br />/WebDev</a></p>
                    </div>
                </Block>
            </div>
        </Container>
    )
}