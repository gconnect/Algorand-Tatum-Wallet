import React from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { StyleSheet, css } from "aphrodite"
import themeVariables from '../../src/themeVariables.module.scss'
import { Link } from "react-router-dom";
import NavBar from "./navbar";
import TransactionTable from "./TransactionTable";
import Button from "react-bootstrap/Button";
import Header from "./header";
import { useState } from "react";
import CustomDialog from "./CustomDialog";
import Transfer from "./transfer";
import Transactions from "./transactions";

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100vh',
    },
    right: {
        // height: '100vh',
    },
    receivebtn: {
        backgroundColor : 'white',  
        color: themeVariables.mainColor,  
        margin: '8px 16px 24px 8px'   
    }, 
      sendbtn: {
        margin: '8px 16px 24px 8px'   
      },
      trans: {
        margin: '24px 0 24px 0'   
      },
      title: {
        margin: '8px 0 24px 0',
        fontSize: '24px',
        fontWeight: 'bold'
      },
      navbar: {
        backgroundColor: themeVariables.mainColor,
        height: '100vh',
    },

})

export default function DashboardLayout() {
  const [openDialog , setOpenDialog] = useState(false)
  const [openReceiveDialog , setReceiveOpenDialog] = useState(false)

  const handleShow = (e: React.MouseEvent<HTMLElement> ) =>{
      setOpenDialog(true)   
  }

  const handleReceiveShow = (e: React.MouseEvent<HTMLElement> ) =>{
    setReceiveOpenDialog(true)   
}
 
    return(
        <div className={css(styles.wrapper)}>
          <Row>
            <Col className={css(styles.navbar)}>  <NavBar/></Col>
            <Col xs={10} className={css(styles.right)}>
                  <Header/>
                <Row className={css(styles.title)} >
                      <Col className={css(styles.title)} xs={8}>Transactions</Col>
                      <Col>
                      <Button onClick={(e:React.MouseEvent<HTMLElement>) => handleShow(e)}  className={css(styles.sendbtn)}>Transfer</Button> 
                      <CustomDialog show={openDialog} hide={false} modalTitle={"Transfer"} buttonText={"Transfer"} buttonVisible={false} qrcodeVisible={true}/>
                      
                      <a href="https://dispenser.testnet.aws.algodev.network/" target='blank'>
                      <Button>Receive</Button>
                      </a>
                      <CustomDialog show={openReceiveDialog} hide={false} modalTitle={"Receive"} buttonText={"Receive"} buttonVisible={true} qrcodeVisible={false}/>
                      </Col>
                      </Row>
                      <Row>
                          <Col><Transactions/></Col>
                      </Row>
              </Col>
          </Row>
        </div>
    )
}