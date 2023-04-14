const {validationResult, body} = require("express-validator")
function errorvalidation (req, res){
    const error= validationResult(req);
   
    console.log(error);
    let obj = {};
    error?.errors?.forEach(err => {
      obj[err.param]=err.msg;
    })  
    res.send(obj)
    
}
module.exports ={ 
    errorvalidation
} 