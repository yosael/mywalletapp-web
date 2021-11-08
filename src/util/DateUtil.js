
export const GetDateOnly = (prev) => {
    let date = new Date(prev);
    return date.toISOString().substring(0, 10);
}