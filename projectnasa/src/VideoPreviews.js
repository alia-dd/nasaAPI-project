import React, { useEffect, useState} from "react";
import Modal from 'react-bootstrap/Modal';
import './img&vid.css';
import './index.css';
import forza from './forza.mp4'

function VideoPreviews({ nasaPicture, title,description}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  useEffect(()=>{
          
        // console.log(nasaPicture)             

  },[])
    return (
      <main class="grid">
      <div class="responsive" >  
      <div class="gallery">       
            <video src={nasaPicture} class="Img_Grid" autoPlay loop muted onClick={() => setShow(true)}>
              {/* <source src={nasaPicture} type="video/mp4"/> */}
              {/* <source src={nasaPicture} type="video/mp4"></source> */}
          </video>
          
          {/* <iframe src={nasaPicture} frameBorder="0"  allow="autoplay" */}
           
            {/* allowFullScreen title ={title}/> */}
            <div class="desc">{title}</div> 
      </div>
      </div>
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
            <video src={forza} class="Img_Grid" autoPlay loop muted onClick={() => setShow(true)}>
              {/* <source src={nasaPicture} type="video/mp4"/> */}
              {/* <source src={nasaPicture} type="video/mp4"></source> */}
            </video>
            <div className="container-Modal">
            <h1 className="Title_Modal">{title}</h1>
            <p className="description_Modal">{description}</p>
            </div>
        </Modal.Body>
      </Modal>
        
    </main>
    );
}

export default VideoPreviews