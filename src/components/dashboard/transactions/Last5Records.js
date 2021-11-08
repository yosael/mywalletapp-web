import React, { useContext, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AuthContext from '../../../context/auth-context';
import axiosApi from '../../../util/axios';
import { GetDateOnly } from '../../../util/DateUtil';
import CategoryIcon from '../../transactions/CategoryIcon';
import './DashTransactions.css';

const Last5Records = () => {


    const authCtx = useContext(AuthContext);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {

        const getTransactions = async () => {
        try {
            console.log("sending user id: ",authCtx.currentUser.uid);
            const response = await axiosApi.get(`/transactions/last5/${authCtx.currentUser.uid}`);
            console.log("getTransactions Response: ",response);
            setTransactions(response.data.transactions);

        } catch (error) {
            console.log(error);
        }
        
        }

        getTransactions();
        
    }, []);

    return (
      <>
        {
          (transactions && transactions.length>0) ?
          <Container className='listContainer' >
            
            {
              transactions.map((data)=> 
              <Row className='rowItem' >
                <Col md={2}><CategoryIcon iconType={data.category_name} /></Col>
                <Col md={4} style={{"fontWeight":"bold"}}>{data.category_name}</Col>
                <Col md={{ offset: 1 }}  ><div><label className='text-muted shortText' style={{"margin-right":"20px"}} >{` ${GetDateOnly(data.created_date)}  `}</label> <label className={data.type == 'expense' ? 'amountNegative':'amountPositive'} > {`   ${data.currency} ${data.amount}`}</label></div></Col>
              </Row>
              )
            }
            
          </Container>
          :
          <h4>No Records</h4>
        }
      </>
    )
}

export default Last5Records
