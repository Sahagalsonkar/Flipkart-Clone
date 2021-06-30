import { request } from 'express';
import User from '../model/userSchema.js'



export const userSignup=async(request,response)=>{

    const { firstname, lastname,username,  email, password, phone } = request.body;

    if(!firstname || !lastname || !username || !email || !password || !phone){
        return response.json({ error: 'Plz filled the field properly' })
    }


    try{
        const exist=await User.findOne({username:username});
        if(exist){
            return response.status(401).json('User already Registerd')
        }
        //const user=request.body;
        //response.json(user);
        const newUser=new User({firstname, lastname,username,  email, password, phone});
        await newUser.save();

        response.status(200).json('User is successfully Registered');

    }
    catch(error){
        console.log('Erorr',error);
    }
    // return "HELLO";
}


export const userLogin = async (request, response) => {
    try {
        const { email, password } = request.body;
        if (!email || !password) {
            // console.log("Plz filled data")
            return response.json({ error: "Plz filled data" })
        }

        const useLogin = await User.findOne({ email: email })
        if(useLogin) {
            return response.json(`${email} login Successfully`)
        }else{
            return response.json('inValid login')
        }
    } catch (error) {
        console.log('error' ,error)
    }
}