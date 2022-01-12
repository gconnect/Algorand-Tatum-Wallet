import React from "react";
import Nav from 'react-bootstrap/Nav'
import { StyleSheet, css } from "aphrodite"
import { NavLink } from "react-router-dom";
import algo from '../images/algo.png'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import themeVariables from '../../src/themeVariables.module.scss'

const styles = StyleSheet.create({
  nav: {
      display: 'block'
  },
  navItem: {
      color: 'white',
      textDecoration: 'none',
      margin: '16px',
      display: 'block',
      borderBottom: 'solid blue 1px',
      padding: '4px'
  },
  navLink: {
    marginTop: '48px',
},
logoName: {
  display: 'inline',
  color: 'white',
  marginTop: '16px'
},
 
navTop: {
  marginTop: '16px',
},

})
export default function NavBar(){
  return(
      <div>
          <Row>
            <Col className={css(styles.navTop)} >
            <img src={algo} alt="Algo" height="50px" width="50px"/>
            <h6 className={css(styles.logoName)}>Tatum Algo Wallet</h6>
            </Col>
          </Row>
          <Row>
          <Col className={css(styles.navLink)}>
            <NavLink className={css(styles.navItem)} to="/">Wallet</NavLink>
            <NavLink className={css(styles.navItem)} to="/">Add Wallet</NavLink>
            <NavLink className={css(styles.navItem)} to="/">Asset Management</NavLink>
            <NavLink className={css(styles.navItem)} to="/">Address Book</NavLink>
            <NavLink className={css(styles.navItem)} to="/">Logout</NavLink>
            </Col>
          </Row>      
      </div>
  )
}