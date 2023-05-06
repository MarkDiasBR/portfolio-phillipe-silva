import { MarqueeContainer } from './styled.js';

export default function InfiniteMarquee({ number, text }) {
    return (
        <MarqueeContainer>
            <div className="marquee marquee--hover-pause enable-animation">
                <ul className="marquee__content">
                <li><div className="number">{number}</div>{text}</li>
                <li><div className="number">{number}</div>{text}</li>
                <li><div className="number">{number}</div>{text}</li>
                <li><div className="number">{number}</div>{text}</li>
                <li><div className="number">{number}</div>{text}</li>
                <li><div className="number">{number}</div>{text}</li>
                </ul>

                <ul aria-hidden="true" className="marquee__content">
                <li><div className="number">{number}</div>{text}</li>
                <li><div className="number">{number}</div>{text}</li>
                <li><div className="number">{number}</div>{text}</li>
                <li><div className="number">{number}</div>{text}</li>
                <li><div className="number">{number}</div>{text}</li>
                <li><div className="number">{number}</div>{text}</li>
                </ul>
            </div>
        </MarqueeContainer>
    )
}