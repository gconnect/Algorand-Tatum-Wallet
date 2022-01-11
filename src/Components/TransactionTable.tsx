import React from "react";
import Table from 'react-bootstrap/Table'

interface TransactionInterface{
  txId: String,
  round: number,
  sender: String,
  receiver?: String,
  amount?: number
  txType: String,
  fee: number,
}

export default function TransactionTable(params: TransactionInterface){
  return(
    <div>
        <Table striped bordered hover>
      
          <tbody>
            <tr>
              <td>{params.txId}</td>
              <td>{params.round}</td>
              <td>{params.sender}</td>
              <td>{params.receiver}</td>
              <td>{params.amount}</td>
              <td>{params.txType}</td>
              <td>{params.fee}</td>
            </tr>
          </tbody>
      </Table>
    </div>
  )
}