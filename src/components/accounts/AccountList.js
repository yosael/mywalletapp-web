import React,{ useState, useEffect,useContext } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import AuthContext from "../../context/auth-context";
import axiosApi from '../../util/axios';
import AccountIconType from "./AccountIconType";
import { FcBullish } from 'react-icons/fc';
import './Account.css';

const AccountList = () => {

  const [accounts, setAccounts] = useState([]);
  const authCtx = useContext(AuthContext);
  let totalBalance = 0;

  useEffect(() => {

    const getAccounts = async () => {
      console.log("getAccounts");
      try {
        const response =  await axiosApi.get(`/accounts/${authCtx.currentUser.uid}`);  
        console.log(response);
        setAccounts(response.data.accounts);
      } catch (error) {
        
      }
    }
    getAccounts();

  }, []);

  return (
    
    <Container className='listContainer'>
      {
        accounts &&
        accounts.map((item)=> {
        return (
        <Row className='rowItem'>
          <Col md={1}><AccountIconType iconType={item.account_type} iconSize={30} /></Col>
          <Col md={4} style={{"fontWeight":"bold"}}>{'('+item.account_type+') - '+item.account_name}</Col>
          <Col md={{  offset: 4 }} className="amountPositive" >{item.currency+' '+item.current_balance} <FcBullish /></Col>
        </Row>
        )})
      }
      

    </Container>
  );
};

export default AccountList;
