import React, { useEffect, useState } from "react";
import axios from "axios";
import { Constants } from "../constants";
import Spinner from "react-bootstrap/Spinner"

export default function ApiService () {

  const [transactions1, setTransactions] : any = useState([])
  const [loading, setLoading] = useState(false)
  const [balance, setbalance] = useState(0)
  const [currentBlock, setCurrentBlock] = useState(0)
  const address = localStorage.getItem("address")


  const getTransactions = async() => {
    try{
      setLoading(true)
      let data = await axios.get(`${Constants.algoUrl}accounts/${address}/transactions/` ,{
          headers :{
              'content-type': 'text/json',
             "x-api-key" : process.env.REACT_APP_ALGO_API_KEY!
             
         },
        })
          setLoading(false)
          // console.log( data.data)
          const transactions = data.data['transactions']
          setTransactions(transactions)
        
  }catch(err){
      console.log(err)
  }
   }

const getAccountBalance = async () =>{
  try{
    setLoading(true)
    let data = await axios.get(`${Constants.baseUrl}account/balance/D26ADTXVTTH3NNUE2ZTXK6E5BRINHNXCR3TCRHEOXTIVYEJ72Z6HK73EFE/` ,{
        headers :{
            'content-type': 'text/json',
           "x-api-key" : process.env.REACT_APP_TATUM_API_KEY!
           
       },
      })
        setLoading(false)
        const balance = data.data
        localStorage.setItem('balance', data.data )
        console.log(balance)
        setbalance(balance)
      
}catch(err){
    console.log(err)
}
}   

const getCurrentBlock = async () =>{
  try{
    setLoading(true)
    let data = await axios.get(`${Constants.baseUrl}block/current` ,{
        headers :{
            'content-type': 'text/json',
           "x-api-key" : process.env.REACT_APP_TATUM_API_KEY!
           
       },
      })
        setLoading(false)
        const currentBlock = data.data
        localStorage.setItem('block', data.data )
        console.log(currentBlock)
        setCurrentBlock(currentBlock)
      
}catch(err){
    console.log(err)
}
} 

const postTransaction = async () =>{

  try{
    const formdata = {
      from: "TMETT6BXL3QUH7AH5TS6IONU7LVTLKIGG54CFCNPMQXWGRIZFIESZBYWP4",
      to: "NTAESFCB3WOD7SAOL42KSPVARLB3JFA3MNX3AESWHYVT2RMYDVZI6YLG4Y",
      fee: "0.001",
      amount: "1",
      note: "string",
      fromPrivateKey: "72TCV5BRQPBMSAFPYO3CPWVDBYWNGAYNMTW5QHENOMQF7I6QLNMJWCJZ7A3V5YKD7QD6ZZPEHG2PV2ZVVEDDO6BCRGXWIL3DIUMSUCI"
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

const getAssets = async() => {
  try{
    setLoading(true)
    let data = await axios.get(`${Constants.algoUrl}accounts/X7FNIFYVGJ473AKULOVP6JGAYWIM3GXGPAOLJV6BPPWRQXE3FP6VPVYXJ4` ,{
        headers :{
            'content-type': 'text/json',
           "x-api-key" : process.env.REACT_APP_ALGO_API_KEY!
           
       },
      })
        setLoading(false)
        console.log( data.data)
        const transactions = data.data['account']['created-assets']
                console.log( transactions)

        // setTransactions(transactions)
      
}catch(err){
    console.log(err)
}
 }

 useEffect( ()  => {
    getTransactions()
    getAccountBalance()
    getCurrentBlock()  
    getAssets()
    postTransaction()  
 }, [])

 return(

   loading ? <Spinner animation="border" /> :
   <div>
     {balance}
     {currentBlock}
      {transactions1.map((transaction : any) => (
        <div>

              <p key={transaction.id}>{transaction.id}</p>
              <p>{transaction.fee}</p>
              <p>{transaction.sender}</p>
              <p>{transaction["confirmed-round"]}</p>
              <p>{transaction["tx-type"]}</p>
    
              <p>{transactions1[0]['payment-transaction'].receiver}</p> 
              <p>{transactions1[0]['payment-transaction'].amount}</p> 
              <hr />
        </div>
            ))}

   </div> 
 )
}