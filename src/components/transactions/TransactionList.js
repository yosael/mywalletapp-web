import React,{ useContext,useState,useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AuthContext from "../../context/auth-context";
import axiosApi from "../../util/axios";
import './Transactions.css';
import { FcApproval } from "react-icons/fc";
import CategoryIcon from "./CategoryIcon";
import { convertToIsoDate, GetDateOnly } from '../../util/DateUtil';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const TransacctionList = ({ title }) => {

  const authCtx = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);
  const initialDate  =  new Date(new Date().setDate(new Date().getDate() - 30));
  const [startDate, setStartDate] = useState(initialDate);
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {

    getTransactions();
    
  }, [startDate,endDate]);

  const getTransactions = async () => {
    try {
      console.log("sending user id: ",authCtx.currentUser.uid);
      const response = await axiosApi.get(`/transactions/range/${authCtx.currentUser.uid}/${convertToIsoDate(startDate,true)}/${convertToIsoDate(endDate,true)}`);
      console.log("getTransactions Response: ",response);
      setTransactions(response.data.transactions);

    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <>
      <div className="row mb-2">
          <div className="col-sm-8">
              <div className="row mb-2 mt-2">
                  <div className="col-sm-2" >
                    <span className="input-group-text" >From</span>
                  </div>
                  <div className="col-sm-3" >
                    <DatePicker id="initDate" name="initDate"  className="form-control" dateFormat="yyyy-MM-dd" dateFormatCalendar="yyyy-MM-dd" selected={startDate} onChange={date => setStartDate(date)}  />
                  </div>
                  <div className="col-sm-2" >
                    <span className="input-group-text" >To</span >
                  </div>
                  <div className="col-sm-4" >
                    <DatePicker id="endDate"  name="endDate" className="form-control" dateFormat="yyyy-MM-dd" dateFormatCalendar="yyyy-MM-dd" selected={endDate} onChange={date => setEndDate(date)} />
                  </div>                  
                  
              </div>
                  
          </div>
      </div>
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
    </>
  );
}

export default TransacctionList;
