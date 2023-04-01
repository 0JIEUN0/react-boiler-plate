import axios from "axios";
import {
    REGISTER_USER
} from './types';

export function registerUser(dataToSubmit) {
    const response = axios.post('/register', dataToSubmit)
        .then(response => response.data);
    return {
        type: REGISTER_USER,
        payload: response,
    }
}
