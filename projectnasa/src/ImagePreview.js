import React, { useEffect, useState} from "react";
import Modal from 'react-bootstrap/Modal';

import './img&vid.css';
import './index.css';

export default function ImagePreview({ nasaPicture, title,description}) {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <main class="grid">
    <div class="responsive" >  
    <div class="gallery">       
          <img src={nasaPicture} alt={title} class="Img_Grid" onClick={() => setShow(true)}/>
          <div class="desc">{title}</div> 
    </div>
    </div>
    
    {/* <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-110w"
        aria-labelledby="example-custom-modal-styling-title"
        className="Modal"
       >
          <img src={nasaPicture} />
          <div className="container-Modal">
          <h1 className="Title_Modal">{title}</h1>
          <p className="description_Modal">{description}hwllo</p>
          </div>
      </Modal> */}
    <Modal
      show={show}
      onHide={() => setShow(false)}
      size="md"
      // dialogClassName="modal-110w"
      aria-labelledby="contained-modal-title-vcenter"
      // centered
      className="Modal"
      scrollable	

    >
      <Modal.Body>
        <img className="Modal-Image" src={nasaPicture} />
          <div className="container-Modal">
          <h1 className="Title_Modal">{title}</h1>
          <p className="description_Modal">{description}</p>
          </div>
      </Modal.Body>
    </Modal>
      
  </main>
  );
}