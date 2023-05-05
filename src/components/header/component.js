import { Container } from './styled';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Container>
            <Link className="logoname-anchor" href="/">
                <p className="logoname">
                    Phillip<span className="reverse">e</span><br />
                    Silva
                </p>
            </Link>

            <div className="anchors">
                <Link className="anchor" to="/sobre">
                    <p><span>Sobre mim</span><sub>1</sub></p>
                    <div className="anchor-div" />
                </Link>
                <Link className="anchor" to="/formacao">
                    <p><span>Formação</span><sub>2</sub></p>
                    <div className="anchor-div" />
                </Link>
                <Link className="anchor" to="/profissional">
                    <p><span>Profissional</span><sub>3</sub></p>
                    <div className="anchor-div" />
                </Link>
                <Link className="anchor" to="/porftolio">
                    <p><span>Portfólio</span><sub>4</sub></p>
                    <div className="anchor-div" />
                </Link>
                <Link className="anchor" to="/contato">
                    <p><span>Contato</span><sub>5</sub></p>
                    <div className="anchor-div" />
                </Link>
            </div>
        </Container>
    )
}