import React,{ useContext,useState,useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AuthContext from "../../context/auth-context";
import axiosApi from "../../util/axios";
import './Transactions.css';
import { FcApproval } from "react-icons/fc";
import CategoryIcon from "./CategoryIcon";
import { GetDateOnly } from '../../util/DateUtil';


const TransacctionList = ({ title }) => {

  const authCtx = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {

    const getTransactions = async () => {
      try {
        console.log("sending user id: ",authCtx.currentUser.uid);
        const response = await axiosApi.get(`/transactions/${authCtx.currentUser.uid}`);
        console.log("getTransactions Response: ",response);
        setTransactions(response.data.transactions);

      } catch (error) {
        console.log(error);
      }
      
    }

    getTransactions();
    
  }, []);

  return (
    <Container className='listContainer'>
      {
        (transactions && transactions.length>0) ? 
          transactions.map((data)=> 
          <Row className='rowItem'>
            <Col md={1}><CategoryIcon iconType={data.category_name} /></Col>
            <Col md={4} style={{"fontWeight":"bold"}}>{data.category_name}</Col>
            <Col md={2} ><label className="text-muted" >{`${ GetDateOnly(data.created_date)} ${data.created_time}`}</label></Col>
            <Col md={{ offset: 2 }} className={data.type == 'expense' ? 'amountNegative':'amountPositive'} >{`${data.currency} ${data.amount}`}</Col>
          </Row>
          )
        :
        <h4>No Records</h4>
      }
    </Container>
  );
}

export default TransacctionList;
