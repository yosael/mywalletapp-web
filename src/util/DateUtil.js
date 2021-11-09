
export const GetDateOnly = (prev) => {
    let date = new Date(prev);
    return date.toISOString().substring(0, 10);
}

export const getHourAndMinutes= (prev) => {
    let date = new Date(prev);
    return date.toISOString().substring(0, 10);
}

export const convertToIsoDate = (date,dateOnly) => {

    let dateIsoFormat;
    if(dateOnly){
      dateIsoFormat = new Date(date);
      return GetDateOnly(dateIsoFormat.toISOString());
    }
    else {
      dateIsoFormat = new Date(date);
      return dateIsoFormat.toISOString();
    }
    
    
  }