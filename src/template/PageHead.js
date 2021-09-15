import React from 'react';
import { Col, Row } from 'react-bootstrap';
import  '../styles/PageHead.css';
import { ArrowLeft } from 'react-bootstrap-icons';


const PageHead = ({pageName}) => {
    return (
        <Row style={{padding:10}}>
            <Col  >
                <div style={{display:'flex',justifyContent:'center'}}>
                    <ArrowLeft size={40}  />
                    <div style={{textAlign:'center',horizontalAlign:'middle'}}>
                        <h4 style={{padding:3,margin:1}} >{pageName}</h4>{/*className="my-4 ml-4" */}
                    </div>
                </div>
            </Col>
            <Col>

            </Col>
        </Row>
    )
}

export default PageHead
