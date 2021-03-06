import React, { useEffect, useState } from "react";
import axios from "axios";
import { Constants } from "../constants";
import Spinner from "react-bootstrap/Spinner"

export default function ApiService () {

  const [loading, setLoading] = useState(false)
  const address = localStorage.getItem("address")
  const privateKey = localStorage.getItem("secret")

const postTransaction = async () =>{

  try{
    const formdata = {
      from: address,
      to: "NTAESFCB3WOD7SAOL42KSPVARLB3JFA3MNX3AESWHYVT2RMYDVZI6YLG4Y",
      fee: "0.001",
      amount: "1",
      note: "string",
      fromPrivateKey: privateKey
      }

    setLoading(true)
    let data = await axios.post(`${Constants.baseUrl}transaction`, {
      formdata,
              headers :{
            'content-type': 'text/json',
           "x-api-key" :" process.env.REACT_APP_TATUM_API_KEY!" 
       },
      })
        setLoading(false)
        const response = data.data
        console.log(response)      
}catch(err){
    console.log(err)
}
} 



 useEffect( ()  => {
    postTransaction()  
 }, [])

 return(
   <div>
      API TESTING HERE
   </div> 
 )
}