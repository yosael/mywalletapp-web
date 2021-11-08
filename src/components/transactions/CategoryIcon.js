import React from 'react';
import { FcApproval,FcShop,FcHome,FcShipped,FcAutomotive,FcStart,FcWiFiLogo,FcBullish,FcPhoneAndroid,FcViewDetails,FcPaid } from 'react-icons/fc';

const CategoryIcon = ({iconType}) => {

    const iconSize = 30;

    if(iconType==='Food and Drinks'){
      return  <FcPaid size={iconSize} />
    }
    else if(iconType==='Housing')
        //return (<div style={{"background":"gray","borderRadius":"50%","width":"50px","height":"50px"}}><FcShop size={30}  /></div>)
        return <FcHome size={iconSize}  />
    else if(iconType==='Shopping'){
        return  <FcShipped size={iconSize} />
    }
    else if(iconType==='Transportation'){
        return  <FcAutomotive size={iconSize} />
    }
    else if(iconType==='Entertainment'){
        return  <FcStart size={iconSize} />
    }
    else if(iconType==='Communication/Internet'){
        return  <FcWiFiLogo size={iconSize} />
    }
    else if(iconType==='Income'){
        return  <FcBullish size={iconSize} />
    }
    else if(iconType==='Cellphone'){
        return  <FcPhoneAndroid size={iconSize} />
    }
    else 
        return <FcViewDetails size={iconSize} />   


    /*
    "Food and Drinks"
"Housing"
"Shopping"
"Transportation"
"Entertainment"
"Communication"
"Income"
"Communication/Internet"
"Cellphone"
"Other" */


}

export default CategoryIcon
