import React from "react"
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button"

interface FormInterface{
  buttonText : String,
  buttonVisibility: boolean
  QrcodeVisible : boolean
}
export default function CustomForm(params : FormInterface){
  return(
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formAddress">
        <Form.Control type="text" placeholder="Address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAmount">
        <Form.Control type="text" placeholder="Amount" />
        </Form.Group>
        <Button variant="primary" type="submit" hidden={params.buttonVisibility}>

        {params.buttonText} </Button>
      </Form>

      <img src="" alt="qrcode" height="100px" width="100px" hidden={params.QrcodeVisible}/>

    </div>
  )
}