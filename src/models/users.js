// Using ODM (Object Document Model)
// Schema of User 
 
var mongoose = require('mongoose');
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');


var Schema = mongoose.Schema;

var UserSchema = new Schema({
	id: { type: String, required: true, index: { unique: true } },
	name: String,
    item:{ type: [String], index: true },
    address: String,
    pincode: String
});

UserSchema.index({"$**": "text" });
UserSchema.plugin(mongoose_fuzzy_searching, { fields: ['id', 'name', 'item', 'address','pincode'] });
module.exports = mongoose.model('User', UserSchema);



