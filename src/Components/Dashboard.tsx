import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

library.add(fab, faCheckSquare, faCoffee)

export default function Dashboard () {
    return(
        <Container>  
            <Row>
            <Col>
                <h1>Welcome to the dashboard</h1>  
                <FontAwesomeIcon icon={['fab', 'discord']} size="lg" color="red"/>
                <Button variant="success" className="mx-5">Bootstrap button</Button>
            </Col>       
            <Col>
            right
            </Col> 
            </Row> 
           
        </Container>
    )
}