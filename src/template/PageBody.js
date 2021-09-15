import React from 'react'
import { Col } from 'react-bootstrap';
import  '../styles/PageBody.css';

const PageBody = ({children}) => {
    return (
        <Col xs={10} >
            {children}
        </Col>
    )
}

export default PageBody;
