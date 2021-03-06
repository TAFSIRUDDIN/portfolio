import { Button, Modal } from 'react-bootstrap';
import React from 'react';

const Project1 = (props) => {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          House Painting Services
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p><b>LIVE SITE: </b><a href="https://house-painting-663f8.web.app/">https://house-painting-663f8.web.app/</a></p>
          <p><b>ClINT SITE CODE LINK: </b><a href="https://github.com/TAFSIRUDDIN/house-painting-clint">https://github.com/TAFSIRUDDIN/house-painting-clint</a></p>
          <p><b>SERVER SITE CODE LINK: </b><a href="https://github.com/TAFSIRUDDIN/Housepainting-server">https://github.com/TAFSIRUDDIN/Housepainting-server</a></p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
};

export default Project1;