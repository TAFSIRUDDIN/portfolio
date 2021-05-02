import { Button, Modal } from 'react-bootstrap';
import React from 'react';

const Project2 = (props) => {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Hablu Book Store
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p><b>LIVE SITE: </b><a href="https://programming-hero-book-shop.web.app/">https://programming-hero-book-shop.web.app/</a></p>
          <p><b>ClINT SITE CODE LINK: </b><a href="https://github.com/TAFSIRUDDIN/Hablu-book-store-clint">https://github.com/TAFSIRUDDIN/Hablu-book-store-clint</a></p>
          <p><b>SERVER SITE CODE LINK: </b><a href="https://github.com/TAFSIRUDDIN/Hablu-book-store-server">https://github.com/TAFSIRUDDIN/Hablu-book-store-server</a></p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
};

export default Project2;