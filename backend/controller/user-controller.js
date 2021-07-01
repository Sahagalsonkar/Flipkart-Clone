import express from 'express';
import User from '../model/userSchema.js'
import bcrypt from 'bcrypt';
const saltRounds = 12;


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

        const hash = bcrypt.hashSync(password, saltRounds);

        const newUser=new User({firstname, lastname,username,  email, password:hash,  phone});
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
        const { username, password } = request.body;
        if (!username || !password) {
            // console.log("Plz filled data")
            return response.json({ error: "Plz filled data" })
        }

        const useLogin = await User.findOne({ username: username})
        if(useLogin) {
            const validPassword = await bcrypt.compare(password, useLogin.password);
            if(validPassword){
                console.log(useLogin);
                response.json({message:`${useLogin.username} user Login successfull`})
                // res.redirect('/')
            }else{
                console.log("inValid Credential!!")
                //response.json({message:"inValid Credential!!"})
                
            }
            
        }else{
            console.log("inValid Credential!!");
            response.json({message:"inValid Credential!!"})
        }
    } catch (error) {
        console.log('error' ,error)
    }
}