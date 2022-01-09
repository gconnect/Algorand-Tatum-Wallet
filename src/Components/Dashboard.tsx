import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { StyleSheet, css } from "aphrodite"
import DashboardLayout from "./layout"

library.add(fab, faCheckSquare, faCoffee)

const styles = StyleSheet.create({
    button: {
        width: '500px'
    }
})

export default function Dashboard () {
    return(
        <div>
            <DashboardLayout/>
        </div>
    )
}