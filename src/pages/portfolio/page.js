import LineGrid from "../../components/css/lineGrid/component.js";
import InfiniteMarquee from "../../components/css/infiniteMarquee/component.js";
import PortfolioItem from "../../components/css/portfolioItem/component.js"
import { Container, ContentContainer  } from "./styled";

export default function Portfolio() {
    return (
        <Container>
            <LineGrid />
            <InfiniteMarquee number={1} text={'Portfólio'} />
            <ContentContainer>
                <PortfolioItem url={'https://mir-s3-cdn-cf.behance.net/projects/808/6c6cc0148512289.Y3JvcCw5MDAsNzA0LDI0OSww.png'}/>
                <PortfolioItem url={'https://mir-s3-cdn-cf.behance.net/project_modules/fs/6847a7148509605.62d6db7ef08ae.png'}/>
                <PortfolioItem url={'https://mir-s3-cdn-cf.behance.net/projects/808/63d60e148506145.Y3JvcCw5MDAsNzA0LDI0OSww.png'}/>
                <PortfolioItem url={'https://mir-s3-cdn-cf.behance.net/projects/808/dd1f79125773609.Y3JvcCwxMDgwLDg0NCwwLDUw.jpg'}/>
                <PortfolioItem url={'https://mir-s3-cdn-cf.behance.net/projects/808/57dc74151299845.630ca1b0ce6e0.jpg'}/>
                <PortfolioItem url={'https://mir-s3-cdn-cf.behance.net/projects/808/34cc2e148508017.Y3JvcCw5MDAsNzA0LDYsMA.png'}/>
                <PortfolioItem url={'https://mir-s3-cdn-cf.behance.net/projects/808/a46ed1148507467.Y3JvcCw5MDAsNzA0LDMzLDA.png'}/>
                <PortfolioItem url={'https://mir-s3-cdn-cf.behance.net/projects/808/087272125773423.Y3JvcCwxMDgwLDg0NCwwLDA.jpg'}/>
                <PortfolioItem url={'https://mir-s3-cdn-cf.behance.net/projects/808/353d9b125773105.Y3JvcCwxMDgwLDg0NCwwLDE0NA.jpg'}/>
                <PortfolioItem url={'https://mir-s3-cdn-cf.behance.net/projects/808/c13f62100449831.Y3JvcCw5MzQsNzMwLDM1Niw0MTg.jpg'}/>
                <PortfolioItem url={'https://mir-s3-cdn-cf.behance.net/projects/808/46d2f593300731.Y3JvcCwxNDAwLDEwOTUsMCwyMTQ.png'}/>
                <PortfolioItem url={'https://mir-s3-cdn-cf.behance.net/project_modules/fs/7b0ea292414093.5e4af1390c6ac.png'}/>
                <PortfolioItem url={'https://mir-s3-cdn-cf.behance.net/projects/808/062bec90791725.Y3JvcCwxNDAwLDEwOTUsMCwxNjk.png'}/>
                <PortfolioItem url={'https://mir-s3-cdn-cf.behance.net/projects/808/86a15c89628881.Y3JvcCwyNTEzLDE5NjYsMTI4NywyNzM.png'}/>
                <PortfolioItem url={'https://mir-s3-cdn-cf.behance.net/projects/808/a384b189625159.Y3JvcCw4MDgsNjMyLDAsMA.png'}/>
                <PortfolioItem url={'https://mir-s3-cdn-cf.behance.net/projects/808/15809389565433.Y3JvcCwxMzAzLDEwMTksNDEsNzQ4.png'}/>
                <PortfolioItem url={'https://mir-s3-cdn-cf.behance.net/projects/808/9ed204158212419.Y3JvcCw4MDgsNjMyLDMzNiww.png'}/>
                <PortfolioItem url={'https://mir-s3-cdn-cf.behance.net/projects/808/a2db64158213237.Y3JvcCw4MDgsNjMyLDI3Miww.png'}/>
                <PortfolioItem url={'https://mir-s3-cdn-cf.behance.net/projects/808/0e220c158943167.Y3JvcCw4MDgsNjMyLDM0Niww.png'}/>
            </ContentContainer>
        </Container>
    )
}