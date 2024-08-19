import JWT from "jsonwebtoken";

//protected routes token Base
export const reqireSignIn = async (req, res, next) =>{
    try{
        const decode = JWT.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );
        next();
    }catch (error){
        console.log(error);
    }
};

//Admin Access
export const isAdmin = async (req,res,next)=>{
    try{
        const user = await User.findbyId(req.user._id);
        if(user.role !== 1){
            return res.tatus(401).send({
                success:false,
                message:"UnAuthorized Access",

            });
        }else{
            next();
        }
    } catch (error){
        console.log(error);
    }
};