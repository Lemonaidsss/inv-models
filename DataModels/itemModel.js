//itemModel.js
const  mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const itemSchema = mongoose.Schema({
	barcode:{                      
        type: String,
        required: [true, "Please add Barcode Value or Scan item."],
        unique: true,
    },			
	name:{
        type: String,
        required: [true, "Please add Item Name."],
    },			
	stocklvl:{
        type: String,
        require: [true, "Please add Item Count."],
    },	
	manufacturer:{
        type: ObjectId,
        ref: "manufacturer"
    },	
	vendor:{
        type: ObjectId,
        ref:"vendor"
    },		
	itemdesc:{type: String},
},{
	timestamps:true,
})

const Items = mongose.model("items", itemSchema);
module.exports = Items;

