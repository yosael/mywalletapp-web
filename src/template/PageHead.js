import React from 'react';
import { Col, Row } from 'react-bootstrap';
import  '../styles/PageHead.css';
import { ArrowLeft } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';


const PageHead = ({pageName}) => {

    let history = useHistory();

    return (
        <Row style={{padding:10}}>
            <Col  >
                <div className="pageHead__container">
                    <ArrowLeft size={40} onClick={history.goBack} className="pageHead__container__arrow" />
                    <div className="pageHead__container__title" >
                        <h4 className="pageHead__container__title__h" >{pageName}</h4>{/*className="my-4 ml-4" */}
                    </div>
                </div>
            </Col>
            <Col>

            </Col>
        </Row>
    )
}

export default PageHead
