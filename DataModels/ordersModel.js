//ordersModel.js (ITEMS THAT ARE ORDERED)
const  mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema

const ordersSchema = mongoose.Schema({
	order_no:{
        type: String
    },			
	item: {				
		type: ObjectId,
		ref: "items"
	},
	order_date:{
        type :Date,
        require: [true,"Please add the order date."]
    },			
	order_stat:{
        type :String,
        require: [true, "Please select order status"]
    }		
},{
	timestamps:true,
});

const Orders = mongoose.model("orders", ordersSchema);
module.exports = Orders;
	