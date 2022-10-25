//vendorModel.js
const  mongoose = require("mongoose");		

const vendorSchema = mongoose.Schema({
	vendor_name:{
        type: String
    },			
    vendor_phone: {
        type: String,
        default:"+63",
        maxLength: [11, "Invalid number."]
    },
	vendor_address:{
        type: String
    },		
	vendor_site:{				
		type: String,
		unique:	true
	},
    vendor_logo:{
        type: String,
        default: "https://pic.onlinewebfonts.com/svg/img_148020.png"
    },
	description:{
        type: String
    },	
},{
	timestamps:true,
});

vendorSchema.path('mfrsite').validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL.');

const Manufacturer = mongoose.model("vendor", vendorSchema);
module.exports = Manufacturer;