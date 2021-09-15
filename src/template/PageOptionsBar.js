import React from 'react';
import { Col, Card } from 'react-bootstrap';
import  '../styles/PageOptionsBar.css';

const PageOptionsBar = ({children}) => {
    {/*<section className="pageOptionsBar"></section>*/}
    return (
    <Col xs={2}>
        {children}
    </Col>
    )
}

export default PageOptionsBar
