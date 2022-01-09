import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";
import { useState } from "react";
import CustomForm from "./CustomForm";

interface ModalInterface{
  show : boolean,
  hide : boolean
  modalTitle : String,
  buttonText: String,
  buttonVisible : boolean,
  QrcodeVisible : boolean

}
export default function CustomDialog(params: ModalInterface) {
  const [showModal, setShowModal] = useState(false)


  const handleClose = () => params.hide
  const handleShow = () => params.show

  return (
    <Modal {...params}

    show={params.show} hide={params.hide} size="lg" aria-labelledby="contained-modal-title-vcenter"
      centered 
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {params.modalTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <CustomForm buttonText={params.buttonText} buttonVisibility={params.buttonVisible} QrcodeVisible={params.QrcodeVisible}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleShow}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}