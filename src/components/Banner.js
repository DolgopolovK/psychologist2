import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import cloudImg from "../assets/img/cloud.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Всегда с тобой", "Дома ", "В другой стране" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="bannera" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={12} xl={5}>
            <TrackVisibility className="banner">
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                
                <h1>{`Психолог в комфортном для тебя месте`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Doma", "В поездке", "В другой стране" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Доступная психологическая помощь из любого места</p>
                  <button onClick={() => console.log('connect')}>Перейти в Telegram <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          
          </Row>
          
        
      </Container>
    </section>
  )
}
