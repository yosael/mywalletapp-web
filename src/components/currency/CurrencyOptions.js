import React,{ useState,useEffect } from 'react';
import axiosApi from '../../util/axios';


const CurrencyOptions = () => {
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        const getCurrencies = async ()=>{
            try {
                const response = await axiosApi.get('/currencies');
                console.log("response currencies: ",response);
                setCurrencies(response.data.currencies);
            } catch (error) {
                console.log(error);
            }
        }

        getCurrencies();
        
    }, []);

    return (
        <>
            <option>Select Currency</option>
            {
                currencies.map( (item) => 
                    <option value={item.currency_id} key={item.currency_id} >
                        {item.description}
                    </option>
                )
            }
        </>
    )
}

export default CurrencyOptions
