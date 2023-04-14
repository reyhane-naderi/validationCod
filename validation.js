const { body } = require("express-validator");

const LoginValidation = () => {
    return [
        body("email").isEmail().withMessage("email is invalid"),
        body("phoneNumber").isMobilePhone('any').withMessage("mobile just number"),
        body("fullname").isLength({min:5 , max:35}).withMessage("full name is required"),
        body("password").isLength({min:6 ,max: 20}).withMessage("password length should be between 6-20 characters"),
        body("ConfirmPassword").custom((value,{req})=>{
            if (value !== req.body.password) {
                throw new Error("Password does not match with ConfirmPassword");
            }
            return true;
        })
    ];
};

module.exports = {
    LoginValidation
};
