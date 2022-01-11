import React from "react"
import TransactionTable from "./TransactionTable"
import { useState, useEffect } from "react"
import axios from "axios"
import { Constants } from "../constants";
import { Spinner,  } from "react-bootstrap/";
import  Table from "react-bootstrap/Table";



export default function AssetTransactions(){
  const [transactions1, setTransactions] : any = useState([])
  const [loading, setLoading] = useState(false)
  const address = localStorage.getItem("address")
  const [empty, setEmpty] = useState(false)

  const getAssets = async() => {
    try{
      setLoading(true)
      let data = await axios.get(`${Constants.algoUrl}accounts/${address}` ,{
          headers :{
              'content-type': 'text/json',
             "x-api-key" : process.env.REACT_APP_ALGO_API_KEY!
             
         },
        })
          setLoading(false)
          // console.log( data.data)
          const transactions = data.data['created-assets']
          if(transactions.length < 1) {
            setEmpty(true)
          }
          setTransactions(transactions)
        
  }catch(err){
      console.log(err)
  }
   }

   useEffect(() =>{
     getAssets()
   }, [])

   return    loading ? <Spinner animation="border" /> : empty ? <h1>You don't have any asset</h1> :
   <div>
        <Table striped bordered hover responsive>

         <thead>
            <tr>
              <th>TxID</th>
              <th>Block</th>
              <th>From</th>
              <th>To</th>
              <th>amount</th>
              <th>Type</th>
              <th>fee</th>
            </tr>
          </thead>
     </Table>
      {transactions1.map((transaction : any) => (
        <div>
          <TransactionTable 
          txId={transaction.id} 
          fee={transaction.fee} 
          sender={transaction.sender}
          receiver={transactions1[0]['payment-transaction'].amount}
          amount={transactions1[0]['payment-transaction'].amount}
          txType={transaction["tx-type"]}
          round={transaction["confirmed-round"]}
          />
        </div>
            ))}

   </div> 

}