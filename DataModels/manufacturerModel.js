//manufacturerModel.js
const  mongoose = require("mongoose");		

const manufacturerSchema = mongoose.Schema({
	mfr_name:{
        type: String
    },			
	mfr_address:{
        type: String
    },		
	mfr_site:{				
		type: String,
		required: [true, "URL cannot be empty."],
		unique:	true
	},
    mfr_logo:{
        type: String,
        default: "https://pic.onlinewebfonts.com/svg/img_148020.png"
    },
	desc:{
        type: String
    },	
},{
	timestamps:true,
});

manufacturerSchema.path('mfrsite').validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL.');

const Manufacturer = mongoose.model("manufacturer", manufacturerSchema);
module.exports = Manufacturer;