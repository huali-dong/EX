const mongoose = require('../util/mongoose');

const SeatModel = mongoose.model("seat",new mongoose.Schema({
	id:String,
	row:Number,
	col:Number,	
}))

const add= async(body)=>{
	return new SeatModel({
		...body
	})
	.save()
	.then((result)=>{
		return result
	}).catch((err)=>{
		return false;
	})
}

const update = async(body)=>{
	return  SeatModel.updateOne({id:body.id},{...body})
		.then((result)=>{
			return result
		}).catch((err)=>{
			return false
		})
}
module.exports = {
	add,
	update
}