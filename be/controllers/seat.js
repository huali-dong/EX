const seat_model = require('../models/seat');
const { handleData } = require('../util');

const add = async (req, res) => {
	// 接收到发送过来的数据 req.body, 然后存入数据库
	// res.set('content-type', 'application/json; charset=utf8')
	let _data = await seat_model.add(req.body)        //post用req.body
	handleData(_data,res,'seat')    
}

const update = async (req,res)=>{
	let _data = await seat_model.update(req.body)
	handleData(_data,res,'seat')
}

module.exports = {
	add,
	update
}