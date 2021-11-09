import axios from 'axios';
import React,{ useState,useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import logoUSD from './images/logoUSD.png';
import logoBTC from './images/logoBTC.png';
import euroLogo from './images/euroLogo.png';
import euroLogo2 from './images/euroLogo2.png';
import '../dashboard/transactions/DashTransactions.css';

const ExchangeRate = () => {

    const [rates, setRates] = useState();
    const dollarPrice = 0;
    const euroPrice = 0;
    const [currencies, setCurrencies] = useState([
        {name:'USD',img:'logoUSD',btcPrice:0},
        {name:'EUR',img:'euroLogo',btcPrice:0},
    ]);

    useEffect(() => {

        getRates();
        
    }, []);

    const getRates = async () => {

        try {
            const resp = await axios.get('https://api.coinbase.com/v2/exchange-rates?currency=BTC');    
            console.log("rates: ",resp.data);

            setCurrencies([
                {name:'USD',img:'logoUSD',btcPrice:resp.data.data.rates["USD"]},
                {name:'EUR',img:'euroLogo',btcPrice:resp.data.data.rates["EUR"]},
            ]);

        } catch (error) {
            console.log(error);
        }
    }

    

    return (
    <Container className='listContainer2' >
      

      <Row className='rowItem'  >
            <Col md={2}><img src={logoBTC} width={50} height={50}/></Col>
            <Col md={3} style={{"fontWeight":"bold"}}></Col>
            <Col md={2} style={{"font-weight":"bold"}} >
                Bitcoin Price
            </Col>
        </Row>
        <Row className='rowItem'  >
            <Col md={2}><img src={logoUSD} width={50} height={50}/></Col>
            <Col md={3} style={{"fontWeight":"bold"}}></Col>
            <Col md={2} style={{"font-weight":"bold"}} >
                {`${currencies[0].btcPrice} USD`}
            </Col>
        </Row>
        <Row className='rowItem'  >
            <Col md={2}><img src={euroLogo2} width={50} height={50} /></Col>
            <Col md={3} style={{"fontWeight":"bold"}}></Col>
            <Col md={2} style={{"font-weight":"bold"}} >
                {`${currencies[1].btcPrice} EUR`}
            </Col>
        </Row>
        
      
    </Container>
    )
}

export default ExchangeRate
