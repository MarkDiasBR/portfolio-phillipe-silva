import { useLocation } from "react-router-dom";
import { Container } from './styled.js'

export default function Erro() {
    const location = useLocation();

    return (
        <Container className="fala">
            <h1><strong>ERRO 404</strong></h1>
            <p>
                <span>~{location.pathname} </span>
                <br/>
                <br/>
                Página não encontrada!
                <br/><br/>
                A URL que você está tentando acessar não foi encontrada em nosso servidor.
                <br/><br/>
                Verifique se digitou corretamente a URL ou navegue para outra página.
                <br/><br/>
                Suporte:
                <br/>
                <a href="https://github.com/MarkDiasBR">GitHub @MarkDiasBR</a>
            </p>
        </Container>
    )
}