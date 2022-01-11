import React, { useEffect } from "react";
import {StyleSheet, css} from 'aphrodite'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faWallet } from '@fortawesome/free-solid-svg-icons'
import themeVariables from '../../src/themeVariables.module.scss'
import algo from '../images/algoBlack.png'
import DropdownButton  from "react-bootstrap/DropdownButton";
import Dropdown from 'react-bootstrap/Dropdown'
import { Constants } from "../constants";
import { useState } from "react";
import axios from "axios";

const styles = StyleSheet.create({
  header: {
    padding: '16px',
    marginLeft: '0',
    marginTop: '16px'
  },
  walletAddress: {
    color: themeVariables.mainColor,
    fontSize: '14px'
  },
})

export default function Header() {
  const address = localStorage.getItem("address")
  const [loading, setLoading] = useState(false)
  const [balance, setbalance] = useState(0)
  const [currentBlock, setCurrentBlock] = useState(0)

  const getAccountBalance = async () =>{
    try{
      setLoading(true)
      let data = await axios.get(`${Constants.baseUrl}account/balance/${address}/` ,{
          headers :{
              'content-type': 'text/json',
             "x-api-key" : process.env.REACT_APP_TATUM_API_KEY!
             
         },
        })
          setLoading(false)
          const balance = data.data
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

  useEffect(() =>{
    getAccountBalance()
    getCurrentBlock()
  }, [])

  return(
    <div>
        <div className={css(styles.header)}>
          <Row>
              <Col lg={4}>
                <span>
                <FontAwesomeIcon icon={faWallet} color="grey"/>
                Wallet
                </span>
              </Col>
              <Col>Current Block {currentBlock}</Col>
              <Col>Balance</Col>
              <Col>
              <DropdownButton variant="warning" id="dropdown-basic-button" title="TestNet">
                <Dropdown.Item  href="#/action-1">MainNet</Dropdown.Item>
                <Dropdown.Item   href="#/action-2">TestNet</Dropdown.Item>
              </DropdownButton>
              </Col>
          </Row>
          <Row>
              <Col lg={4}>
                <p className={css(styles.walletAddress)}>{address}</p> 
                </Col>
              <Col ><FontAwesomeIcon icon={faCopy} color="grey"/></Col>
              <Col>
              <span><img src={algo} alt="Algo" height="36px" width="36px"/></span>
              <span><h6>{balance} Algo</h6></span> 
              </Col>
              <Col></Col>
          </Row>
    </div>
    </div>
  )
}