//userModel.js
const  mongoose = require("mongoose");


const userSchema = mongoose.Schema({ 
	username:{				
		type: String,
		required: [true, 'Please add a username.'],
		unique: true
	}, 		
	email:{		
		type: String,
        	required: [true, "Please add an email."],
        	unique: true,
        	trim: true,
        	match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            	"Please enter a valid email."]
	}, 					
	password:{
		type: String,
		required: [true, "Please add a password."],
        	minLength: [6, "Password must be atleast 6 characters."]
	},						
	usertype:{
		type: String,
		required: [true, "Please select user type."]
	},		
}, {
	timestamps:true,
})

const User = mongoose.model("User", userSchema)
module.exports = User