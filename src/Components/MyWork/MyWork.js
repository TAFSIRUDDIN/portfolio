import React, { useState } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import Blogs from '../Blogs/Blogs';
import ReactProject from '../ReactProject/ReactProject';
import './MyWork.css';

const MyWork = () => {
    const [key, setKey] = useState('react');
    return (
        <>
            <Container id="portfolio" fluid style={{backgroundColor: 'rgb(129, 120, 120)'}}>
                <div className="mork-head">
                    <h1>My Work</h1>
                </div>
                <div className="works">
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        >
                        <Tab style={{backgroundColor: 'transparent'}} eventKey="blogs" title="Blogs">
                            <Blogs></Blogs>
                        </Tab>
                        <Tab style={{backgroundColor: 'transparent'}} eventKey="react" title="React Project">
                        <Container>
                            <ReactProject></ReactProject>
                        </Container>
                        </Tab>
                        <Tab eventKey="contact" title="Contact">
                        <h1>Work 3</h1>
                        </Tab>
                    </Tabs>
                </div>
            </Container>
        </>
    );
};

export default MyWork;