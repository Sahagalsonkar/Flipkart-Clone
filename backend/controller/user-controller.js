import user from '../model/userSchema.js'



export const userSignup=async(request,response)=>{

    try{
        const exist=await User.findOne({username:request.body.username});
        if(exist){
            return response.status(401).json('User already Registerd')
        }
        const user=request.body;
        const newUser=newUser(user);
        await newUser.save();

        response.status(200).json('User is successfully Registered');

    }
    catch(error){
        console.log('Erorr',error.message);
    }
    return "HELLO";
}