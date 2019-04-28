
const express = require("express");
var router = express.Router();

const seat_controller = require("../controllers/seat");
//设置响应头
const setresponseHeader  = (req,res,next)=>{
    res.set("content-type","application/json;charset = utf-8");
    next();
}
router.use(setresponseHeader);
router.post("/add",seat_controller.add);
router.post("/update",seat_controller.update);
module.exports = router;