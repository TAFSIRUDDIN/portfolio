import React from 'react';
import { Badge, Card, Container, ProgressBar } from 'react-bootstrap';
import './Resume.css';

const Resume = () => {
    return (
        <Container id="resume" fluid  style={{backgroundColor: 'rgb(239 239 239)', padding:'3rem'}}>
            <div className="resume-head">
                <h1>Resume</h1>
            </div>
            <div className="data row">
                <div className="col-md-6">
                <div className="experience">
                    <h3>My Experience</h3>
                </div>
                <Card className="proof-align" style={{ width: '90%',margin: '5%' }}>
                    <Card.Body>
                        <Card.Title><Badge variant="info">2012 - 2013</Badge></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Jr. UI UX Designer</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Themeforest</Card.Subtitle>
                        <Card.Text>
                        Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="proof-align" style={{ width: '90%',margin: '5%' }}>
                    <Card.Body>
                        <Card.Title><Badge variant="info">2014-2016</Badge></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Jr. Product Designer</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Drible</Card.Subtitle>
                        <Card.Text>
                        Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="proof-align" style={{ width: '90%',margin: '5%' }}>
                    <Card.Body>
                        <Card.Title><Badge variant="info">2017-2019</Badge></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Product Designer</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Adobe</Card.Subtitle>
                        <Card.Text>
                        Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
                <div className="col-md-6">
                    <div className="education">
                        <h3>My Education</h3>
                    </div>
                <Card className="proof-align" style={{ width: '90%',margin: '5%' }}>
                    <Card.Body>
                        <Card.Title><Badge variant="info">2000-2004</Badge></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Computer Science</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">International University</Card.Subtitle>
                        <Card.Text>
                        Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="proof-align" style={{ width: '90%',margin: '5%' }}>
                    <Card.Body>
                        <Card.Title><Badge variant="info">2005-2008</Badge></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Bachelor Degree</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">University of California</Card.Subtitle>
                        <Card.Text>
                        Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="proof-align" style={{ width: '90%',margin: '5%' }}>
                    <Card.Body>
                        <Card.Title><Badge variant="info">2009-2012</Badge></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Master Degree</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Harvard University</Card.Subtitle>
                        <Card.Text>
                        Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
                        </Card.Text>
                    </Card.Body>
                </Card>
              
                </div>
            </div>
            <Container fluid style={{paddingTop: "2rem", paddingBottom: "5rem", paddingLeft: "2rem", paddingRight: "2rem"}}>
                <div className="skills">
                    <h3 className="skill-head">My Skill</h3>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="skillBox">
                            <h5>Web Design</h5>
                            <ProgressBar style={{backgroundColor: "#b0b4b8"}} now={75} label={`${75}%`} />
                        </div>
                        <div className="skillBox">
                            <h5>HTML/CSS</h5>
                            <ProgressBar style={{backgroundColor: "#b0b4b8"}} now={90} label={`${90}%`} />
                        </div>
                        <div className="skillBox">
                            <h5>JavaScript</h5>
                            <ProgressBar style={{backgroundColor: "#b0b4b8"}} now={80} label={`${80}%`} />
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className="skillBox">
                            <h5>React JS</h5>
                            <ProgressBar style={{backgroundColor: "#b0b4b8"}} now={70} label={`${70}%`} />
                        </div>
                    <div className="skillBox">
                            <h5>Bootstrap</h5>
                            <ProgressBar style={{backgroundColor: "#b0b4b8"}} now={85} label={`${85}%`} />
                        </div>
                    <div className="skillBox">
                            <h5>React-Bootstrap</h5>
                            <ProgressBar style={{backgroundColor: "#b0b4b8"}} now={80} label={`${80}%`} />
                        </div>
                    </div>
                </div>
            </Container>    
        </Container>
    );
};

export default Resume;