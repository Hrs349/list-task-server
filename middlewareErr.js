
function errorMid (err,req,res,next) {
    res.status(400).send('Error:' + err.message)

}
module.exports = errorMid;