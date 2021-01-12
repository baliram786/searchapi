// Using ODM (Object Document Model)
// Schema of User 
 
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	id: { type: String, required: true, index: { unique: true } },
	name: String,
    item:{ type: [String], index: true },
    address: String,
    pincode: String
});
UserSchema.index({"$**": "text" });

module.exports = mongoose.model('User', UserSchema);



