import { useSpring } from '@react-spring/core';
import { animated } from '@react-spring/web';
import React, { useRef, useState } from 'react';
import { Button, Container, Overlay, Tooltip } from 'react-bootstrap';
import './KnowMeMore.css';
import resume from './TafsirUddinResume.pdf';

const KnowMeMore = () => {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    const [flip, set] = useState(false)
    const { number } = useSpring({
      reset: true,
      reverse: flip,
      from: { number: 0 },
      number: 3,
      delay: 1000,
    })
    return (
        <Container fluid style={{backgroundColor: 'white', paddingTop: '5rem'}}>
            <h1 id="about" className="Know-me">Know Me More</h1>
            <div style={{ paddingTop: '3rem', marginBottom: '3rem'}} className="row">
                <div className="col-md-7">
                    <Container>
                        <div className="Know-me-text">
                            <h3>I'm <span style={{color: '#20c997'}}>Tafsir Uddin</span> a Web Developer</h3>
                            <p>I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br/> Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>
                        </div>
                    </Container>
                </div>
                <div className="col-md-5">
                    <Container className= "cv-detail">
                        <br/><br/>
                        <br/>
                        <p><b>Name:</b>Simone Olivia</p>
                        <p><b>Email:</b>chat@simone.com</p>
                        <p><b>Age:</b>28</p>
                        <p><b>From:</b>Los Angeles, California</p>
                        <a href={resume} download>



                        <Overlay target={target.current} show={show} placement="right">
                            {(props) => (
                            <Tooltip id="overlay-example" {...props}>
                                Click
                            </Tooltip>
                            )}
                        </Overlay>


                            <Button ref={target} onMouseEnter={() => setShow(!show)} onMouseLeave={() => setShow(!show)} className="download-cv"variant="primary">Download-cv</Button>
                            
                        </a>
                    </Container> 
                </div>
            </div>
            <Container>
                <div className="proof row">
                    <div className="col-md-4">
                        <h1>
                            <animated.div style={{display: 'inline', marginLeft: '40px'}} className="years-xperiance">
                                {number.to(n => n.toFixed())}
                            </animated.div>+
                        </h1>
                        <h5>Years Experience</h5>
                    </div>
                    <div className="col-md-4">
                        <h1>
                            <animated.div style={{display: 'inline', marginLeft: '40px'}} className="years-xperiance">
                                {number.to(n => (n*13).toFixed())}
                            </animated.div>+
                        </h1>
                        <h5>Project Done</h5>
                    </div>
                    <div className="col-md-4">
                        <h1>
                            <animated.div style={{display: 'inline', marginLeft: '40px'}} className="years-xperiance">
                                {number.to(n => (n*5).toFixed())}
                            </animated.div>+
                        </h1>
                        <h5>Happy Clint</h5>
                    </div>
                </div>
                </Container>
        </Container>
    );
};

export default KnowMeMore;