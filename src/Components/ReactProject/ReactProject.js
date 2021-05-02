
import React from 'react';
import { Button, Card, CardColumns } from 'react-bootstrap';
import Project1 from './Project1/Project1';
import Project2 from './Project2/Project2';
import Project3 from './Project3/Project3';
import './ReactProject.css';
import project1 from '../../img/project1.png'
import project2 from '../../img/project2.png'
import project3 from '../../img/project3.png'

const ReactProject = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="react-projects">
            <CardColumns>
                <Card>
                    <Card.Img variant="top" src={project1} />
                    <Card.Body>
                    <Card.Title>House Painting Services</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Footer style={{backgroundColor: 'transparent'}} className="text-muted"> <Button variant="primary" onClick={() => setModalShow(true)}>Show More</Button></Card.Footer>
                    </Card.Body>
                </Card>
                <Project1
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <Card>
                    <Card.Img variant="top" src={project2} />
                    <Card.Body>
                    <Card.Title>Hablu Book store</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Footer style={{backgroundColor: 'transparent'}} className="text-muted"> <Button variant="primary" onClick={() => setModalShow(true)}>Show More</Button></Card.Footer>
                    </Card.Body>
                </Card>
                <Project2
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <Card>
                    <Card.Img variant="top" src={project3} />
                    <Card.Body>
                    <Card.Title>Doctor portal</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Footer style={{backgroundColor: 'transparent'}} className="text-muted"> <Button variant="primary" onClick={() => setModalShow(true)}>Show More</Button></Card.Footer>
                    </Card.Body>
                </Card>
                <Project3
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                {/* <Card className="p-3">
                    <blockquote className="blockquote mb-0 card-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.
                    </p>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                        </small>
                    </footer>
                    </blockquote>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card bg="primary" text="white" className="text-center p-3">
                    <blockquote className="blockquote mb-0 card-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.
                    </p>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                        </small>
                    </footer>
                    </blockquote>
                </Card>
                <Card className="text-center">
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img src="holder.js/100px160" />
                </Card>
                <Card className="text-right">
                    <blockquote className="blockquote mb-0 card-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.
                    </p>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                        </small>
                    </footer>
                    </blockquote>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Text>
                    </Card.Body>
                </Card> */}
            </CardColumns>
        </div>
    );
};

export default ReactProject;