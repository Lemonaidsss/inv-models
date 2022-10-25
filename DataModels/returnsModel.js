//returnsModel.js (ITEMS THAT ARE RETURNED)
const  mongoose = require("mongoose");		
const {ObjectId} = mongoose.Schema

const returnsSchema = mongoose.Schema({
	return_no:{
        type: String
    },		
	item: {					
		type: ObjectId,
		ref: "items"
	},
	returndate:{
        type: Date
    },		
	returnstat:{
        type: String
    },		
    desc:{ 
        type: String //return reason
    }
},{
	timestamps:true,
});

const Returns = mongoose.model("returns", returnsSchema);
module.exports = Returns;