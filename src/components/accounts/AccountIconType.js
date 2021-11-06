import React from 'react';
import { FcCurrencyExchange,FcMoneyTransfer,FcPieChart,FcSalesPerformance,FcLibrary,FcSafe,FcPackage,FcViewDetails } from 'react-icons/fc';

const AccountIconType = ({iconType,iconSize}) => {;

    if(iconType==='General'){
      return  <FcSalesPerformance size={iconSize} />
    }
    else if(iconType==='Cash')
        //return (<div style={{"background":"gray","borderRadius":"50%","width":"50px","height":"50px"}}><FcShop size={30}  /></div>)
        return <FcMoneyTransfer size={iconSize}  />
    else if(iconType==='Saving Account'){
        return  <FcSafe size={iconSize} />
    }
    else if(iconType==='Investment'){
        return  <FcCurrencyExchange size={iconSize} />
    }
    else if(iconType==='Bank Account'){
        return  <FcLibrary size={iconSize} />
    }
    else if(iconType==='Credit Card'){
        return  <FcPackage size={iconSize} />
    }
        return <FcViewDetails size={iconSize} />   
}

export default AccountIconType;
