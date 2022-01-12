import React, { useState, useRef, useEffect } from "react"
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button"
import axios from 'axios'
import {Constants} from '../constants'

interface FormInterface{
  buttonText? : String,
  buttonVisibility?: boolean,
  qrcodeVisible? : boolean,
}
export default function CustomForm(params : FormInterface){
  
  const transferAmount = useRef()
  const transferTo = useRef()

  const [loading, setLoading] = useState(false)
  const addressKey = localStorage.getItem("address")
  const privateKey = localStorage.getItem("secret1")
  const [amount, setAmount] = useState("0")
  const [address, setAddress] = useState("")

const postTransaction = async () =>{

  try{
    // const formdata = {
    //   "from": addressKey,
    //   "to": address,
    //   "fee": "0.001",
    //   "amount": parseInt(amount),
    //   "note": "string",
    //   "fromPrivateKey": privateKey
    //   }

    setLoading(true)
    let data = await axios.post(`${Constants.baseUrl}transaction`,  
      {"from": addressKey,
      "to": address,
      "fee": "0.001",
      "amount": amount,
      "note": "string",
      "fromPrivateKey": privateKey
    },
    
    {
      headers : {
        'content-type': 'application/json',
        "x-api-key" : process.env.REACT_APP_TATUM_API_KEY!
      }
    }, 
    )
    setLoading(false)
    const response = data.data
    console.log(response.txId) 
    alert( `Transaction successful. txId is\n ${response.txId}`)     
}catch(err){
    console.log(err)
    alert(err)     

}
} 

console.log(privateKey)
console.log(addressKey)

  const  onAddressChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setAddress(e.currentTarget.value);
    console.log(address)
  };

  const  onAmountChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setAmount(e.currentTarget.value);
    console.log(amount)
  };

  return(
    <div>
          <input  type="text" placeholder="Address" onChange={onAddressChange} value={address} required/><br/><br/>
          <input type="number" placeholder="Amount" onChange={onAmountChange} value={amount} required/><br/><br/>
          <Button variant="primary" type="submit" hidden={params.buttonVisibility} onClick={postTransaction}>
          {params.buttonText} </Button>
      <img src="" alt="qrcode" height="100px" width="100px" hidden={params.qrcodeVisible}/>

    </div>
  )
}