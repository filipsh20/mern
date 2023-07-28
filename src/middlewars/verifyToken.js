import jwt from 'jsonwebtoken';

export const verifyToken = async (req, res, next) => {
    try{
        let token = req.header("Authorization");
        if(!token) return res.status("403").send("Access denied");
        
        if(token.startsWith("Bearer ")){
            token = token.slice(7, token.length).trimLeft();
        }

        const isAuthenticated = jwt.verify(token, process.env.JWT_AUTH);
        req.isAuthenticated = isAuthenticated;
        next();
    }catch(error){
        res.tatus(500).json({error: error.message})
    }
}