import express from "express";
const router = express.Router();
var Users = require("../models/UserRegistration");

var login = (req:any, res:any) =>{
    console.log("entered");
    Users.findOne(
        {
        email: req.body.email,
        password: req.body.password,
    },
    (user_log_err:any, user_log_result:any) => {
        console.log("check user_log_err", user_log_err);
        if (user_log_err){
            return res.status(400).json({
                message: "something wrong",
                error: user_log_err,
            });
        }else{
            return res.status(200).json({
                message: "User successfully logged",
                data: user_log_result,
                });
            }
        }
    );

};
var signUpWithEmail = (req:any, res: any) => {
    console.log("check data", req.body);
    Users.create(
        {
        email: req.body.email,
        password: req.body.password,
        full_name: req.body.full_name,
        contact: req.body.contact,
        dob: req.body.dob
    },
    (user_create_err:any, user_create_result:any) => {
        console.log("check user_create_err", user_create_err);
        if (user_create_err){
            return res.status(400).json({
                message: "something wrong",
                error: user_create_err,
            });
        }else{
            return res.status(200).json({
                message: "User successfully created",
                data: user_create_result,
                });
            }
        }
    );
};   
var userList= (req:any, res: any) => {
    console.log("loading for data", req.body);
    Users.find(
        {
        email: req.body.email,
        full_name: req.body.full_name,
        contact: req.body.contact,
        dob: req.body.dob,
        avatar: req.body.avatar
    },
    (user_view_err:any, user_view_result:any) => {
        console.log("check user_view_err", user_view_err);
        if (user_view_err){
            return res.status(400).json({
                message: "something wrong",
                error: user_view_err,
            });
        }else{
            return res.status(200).json({
                message: "User successfully listed",
                data: user_view_result,
                });
            }
        }
    );    
};
var deleteProfile= (req:any, res: any) => {
    console.log("loading for data", req.body);
    Users.findByIdAndRemove(
        {
        email: req.body.email,
        password: req.body.password,
        full_name: req.body.full_name,
        contact: req.body.contact,
        dob: req.body.dob,
        avatar: req.body.avatar
    },
    (user_delete_err:any, user_delete_result:any) => {
        console.log("check user_view_err", user_delete_err);
        if (user_delete_err){
            return res.status(400).json({
                message: "something wrong",
                error: user_delete_err,
            });
        }else{
            return res.status(200).json({
                message: "User successfully deleted",
                data: user_delete_result,
                });
            }
        }
    );    
};
var updateProfile= (req:any, res: any) => {
    const newName = req.body.newName;
    const newEmail = req.body.newEmail;
    const newPassword = req.body.newPassword;
    const newContact = req.body.newContact;
    const newDob = req.body.newDob;
    const newAvatar = req.body.newAvatar;
    const id = req.body.id;

    Users.findById(id, (error:any, userToUpdate:any) => {
        userToUpdate.name =newName;
        userToUpdate.email =newEmail;
        userToUpdate.password =newPassword;
        userToUpdate.contact =newContact;
        userToUpdate.dob =newDob;
        userToUpdate.avatar =newAvatar;
        userToUpdate.save();
    },
    (user_update_err:any, user_update_result:any) => {
        console.log("check user_view_err", user_update_err);
        if (user_update_err){
            return res.status(400).json({
                message: "something wrong",
                error: user_update_err,
            });
        }else{
            return res.status(200).json({
                message: "User successfully deleted",
                data: user_update_result,
                });
            }
        }
    );    
}

router.post("/login", login);
router.post("/signUpWithEmail", signUpWithEmail);
router.get("/viewList", userList);
router.delete("/delete", deleteProfile);
router.put("/update", updateProfile);
module.exports = router;