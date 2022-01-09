import React from "react";
import Table from 'react-bootstrap/Table'

export default function TransactionTable(){
  return(
    <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>TxID</th>
              <th>Block</th>
              <th>Age</th>
              <th>Amount</th>
              <th>From</th>
              <th>To</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              {/* <td colSpan={2}>Larry the Bird</td> */}
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
          </tbody>
      </Table>
    </div>
  )
}