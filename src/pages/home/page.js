import LineGrid from "../../components/css/lineGrid.js";
import { Container, MarqueeContainer, PolaroidContainer, ContentContainer } from "./styled";

export default function Home() {
    return (
        <Container>
            <LineGrid />
            <MarqueeContainer>
                <div class="marquee marquee--hover-pause enable-animation">
                    <ul class="marquee__content">
                    <li><div className="number">1</div>Sobre mim</li>
                    <li><div className="number">1</div>Sobre mim</li>
                    <li><div className="number">1</div>Sobre mim</li>
                    <li><div className="number">1</div>Sobre mim</li>
                    <li><div className="number">1</div>Sobre mim</li>
                    <li><div className="number">1</div>Sobre mim</li>
                    </ul>

                    <ul aria-hidden="true" class="marquee__content">
                    <li><div className="number">1</div>Sobre mim</li>
                    <li><div className="number">1</div>Sobre mim</li>
                    <li><div className="number">1</div>Sobre mim</li>
                    <li><div className="number">1</div>Sobre mim</li>
                    <li><div className="number">1</div>Sobre mim</li>
                    <li><div className="number">1</div>Sobre mim</li>
                    </ul>
                </div>
            </MarqueeContainer>
            <PolaroidContainer />
            <p style={{color:'rgb(20,20,20)'}}>Don't fall in love</p>
            <ContentContainer>
                <h1>Olá!</h1>
                <p>Sou o Phil. Sou formado em Comunicação Social: Publicidade e Propaganda, na FTC Salvador. Hoje trabalho no setor de marketing da Rádio Piatã FM, líder de audiência em Salvador, Bahia, onde sou produtor, faço estratégias de marketing e redes sociais, além de ser responsável pelo audiovisual da emissora.

​

Antes disso, fui estagiário de designer no marketing das rádios da Rede Bahia (Bahia FM, Bahia FM Sul, Globo FM e CBN Salvador) e auxiliar de comunicação da Grande Loja Maçônica do Estado da Bahia (GLEB).
                </p>
            </ContentContainer>
        </Container>
    )
}