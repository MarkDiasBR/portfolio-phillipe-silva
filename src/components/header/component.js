import { Container } from './styled';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Container>
            <a className="logoname-anchor" href="#">
                <p className="logoname">
                    Phillip<span className="reverse">e</span><br />
                    Silva
                </p>
            </a>

            <div className="anchors">
                <a className="anchor" href="#">
                    <p><span>Sobre mim</span><sub>1</sub></p>
                    <div className="anchor-div" />
                </a>
                <a className="anchor" href="#">
                    <p><span>Formação</span><sub>2</sub></p>
                    <div className="anchor-div" />
                </a>
                <a className="anchor" href="#">
                    <p><span>Profissional</span><sub>3</sub></p>
                    <div className="anchor-div" />
                </a>
                <a className="anchor" href="#">
                    <p><span>Portfólio</span><sub>4</sub></p>
                    <div className="anchor-div" />
                </a>
                <a className="anchor" href="#">
                    <p><span>Contato</span><sub>5</sub></p>
                    <div className="anchor-div" />
                </a>
            </div>
        </Container>
    )
}