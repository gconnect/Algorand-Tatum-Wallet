import React from "react";
import {StyleSheet, css} from 'aphrodite'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faWallet } from '@fortawesome/free-solid-svg-icons'
import themeVariables from '../../src/themeVariables.module.scss'
import algo from '../images/algoBlack.png'
import DropdownButton  from "react-bootstrap/DropdownButton";
import Dropdown from 'react-bootstrap/Dropdown'

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
// interface HeaderInterface {
//   address : String,
//   balance : String
// }
export default function Header() {
  return(
    <div>
        <div className={css(styles.header)}>
          <Row>
              <Col lg={6}>
                <span>
                <FontAwesomeIcon icon={faWallet} color="grey"/>
                Wallet
                </span>
              </Col>
              <Col></Col>
              <Col>Balance</Col>
              <Col>
              <DropdownButton variant="warning" id="dropdown-basic-button" title="TestNet">
                <Dropdown.Item  href="#/action-1">MainNet</Dropdown.Item>
                <Dropdown.Item   href="#/action-2">TestNet</Dropdown.Item>
              </DropdownButton>
              </Col>
          </Row>
          <Row>
              <Col lg={6}>
                <p className={css(styles.walletAddress)}>RVZYBH7NDCDDBUHIWOPT7EQHDPOLZPNKSRCCFEFZUDLY432CNOQ72YAMRM</p> 
                </Col>
              <Col ><FontAwesomeIcon icon={faCopy} color="grey"/></Col>
              <Col>
              <span><img src={algo} alt="Algo" height="36px" width="36px"/></span>
              <span>24 Algo</span> 
              </Col>
              <Col></Col>
          </Row>
    </div>
    </div>
  )
}