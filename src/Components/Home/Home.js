import React from 'react';
import { Button, Container, Jumbotron } from 'react-bootstrap';
import './Home.css';
import Typical from 'react-typical'


const Home = () => {
    return (
        
        <div id="home" className="head-body">
            <Container className="banner-head">
            <p style={{fontWeight: '500', fontSize: '1.75rem', color: 'white' }}>Welcome</p>
            <Typical
                steps={['I am Tafsir Uddin.', 3000, 'I am a Web Developer.', 3000, 'And react designer.', 3000]}
                loop={Infinity}
                wrapper="h1"
            />
            <p className="area">based in Los Angeles, California.</p>
            <Button className="hire-me" variant="outline-primary">Hire me</Button>
        </Container >
        </div>
        
    );
};

export default Home;