
export const GetDateOnly = (prev) => {
    let date = new Date(prev);
    return date.toISOString().substring(0, 10);
}

export const getHourAndMinutes= (prev) => {
    let date = new Date(prev);
    return date.toISOString().substring(0, 10);
}