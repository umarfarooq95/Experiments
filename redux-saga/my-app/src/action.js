
export const REQUEST_API_CALL = 'REQUEST_API_CALL';
export const RECEIVE_API_CALL = 'RECEIVE_API_CALL';


export const requestApiData = () => {
    return {type: REQUEST_API_CALL}
}

export const receiveApiData = (data) => {
    return {type: RECEIVE_API_CALL, data}
}




