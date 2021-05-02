import { Button, Modal } from 'react-bootstrap';
import React from 'react';

const Project3 = (props) => {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Doctor Portal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p><b>LIVE SITE: </b><a href="https://https://doctor-portal-project-87623.web.app/">https://doctor-portal-project-87623.web.app/</a></p>
          <p><b>ClINT SITE CODE LINK: </b><a href="https://github.com/TAFSIRUDDIN/doctor-portal-clint">https://github.com/TAFSIRUDDIN/doctor-portal-clint</a></p>
          <p><b>SERVER SITE CODE LINK: </b><a href="https://github.com/TAFSIRUDDIN/doctors-server-site">https://github.com/TAFSIRUDDIN/doctors-server-site</a></p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
};

export default Project3;