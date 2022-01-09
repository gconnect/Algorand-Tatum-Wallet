import React from "react";
import Alert from 'react-bootstrap/Alert'
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
    </div>
     : <div></div>
  )
}