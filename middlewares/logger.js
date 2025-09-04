function logger(req, res, next){
const method = req.method
const status = res.statusCode
const route = req.originalUrl
const time = new Date()

console.log("metodo: ",method,"|| status: ",status,"|| route: ",route,"|| time: ",time)
next();

}
export default logger