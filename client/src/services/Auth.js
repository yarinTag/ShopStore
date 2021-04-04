import axios from 'axios'
import { serverApi } from '../config'

async function registerService(registerDetails) {
    const result = await axios.post(`${serverApi}/api/v1/register`, registerDetails)
    return result.data;
}

export { registerService }