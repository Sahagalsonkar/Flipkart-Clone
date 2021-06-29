import axios from 'axios';

const url='http://localhost:8001'


export const authenticateSignup = async (user)=>{
    try{
    return axios.post(`${url}/signup`,user)
    }catch (error){
        console.log('error while calling signup api')

    }

}