/**
 * Created by MathDiskAsus on 1/17/2018.
 */

export const GET_EMPLOYEE_LIST = 'REQUEST_API_CALL';
export const RECEIVE _EMPLOYEE_LIST= 'RECEIVE_API_CALL';


export const requestApiData = () => {
    return {type: REQUEST_API_CALL}
}

export const receiveApiData = (data) => {
    return {type: RECEIVE_API_CALL, data}
}
