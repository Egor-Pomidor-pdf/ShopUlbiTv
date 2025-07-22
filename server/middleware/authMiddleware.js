const jwt = require("jsonwebtoken")

module.exports = function (req, res, next) {
    if(req.method === 'OPTIONS') {
        next()
    }


    try {
        // const authHeader = req.headers.authorization;
        // if (!authHeader || !authHeader.startsWith('Bearer ')) {
        //     console.log("Некорректный заголовок Authorization");
        //     return res.status(401).json({message: "Не авторизован"});
        // }
        console.log("AAAA");
        
console.log(req);

        
        const token = req.headers.authorization.split(' ')[1]
        if(!token) {
            console.log("Ошибка начальная");
            
            return res.status(401).json({message: "Не авторизован"})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()
    } catch(e) {
        console.log("Ошибка вторая");
        res.status(401).json({message: "Не авторизован"})
    }
}