import {RECEIVE_API_CALL} from '../action'


export default (state = {}, {type, data}) => {
    switch (type) {
        case RECEIVE_API_CALL:
            return data;

        default:
            return state
    }
}
