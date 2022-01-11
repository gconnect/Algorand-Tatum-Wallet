import React from "react";
import Alert from 'react-bootstrap/Alert'
import Toast from 'react-bootstrap/Toast'
import {useState} from 'react'

interface AlertInterface {
  message: String,
  title:String,
  show : boolean,
  hide: boolean
}

export default function SuccessAlert(params : AlertInterface) {
  const [show, setShow] = useState(true);
  return(
    params.show === show ?
    <div>
      <Alert variant="success"  onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{params.title}</Alert.Heading>
        <p> {params.message}</p>
      </Alert>

      <Toast>
        <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>
    
    </div>
     : <div></div>
  )
}