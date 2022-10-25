//archivesModel.js (ITEMS THAT ARE INACTIVE AND NO LONGER USED)
const  mongoose = require("mongoose");		
const {ObjectId} = mongoose.Schema

const archivesSchema = mongoose.Schema({
	item: {					        //import from itemModel.js
		type: ObjectId,
		ref: "items"
	},
    arch_date:{type: Date}			//archived date
},{
	timestamps:true,
});

const Archives = mongoose.model("archives", archivesSchema);
module.exports = Archives;