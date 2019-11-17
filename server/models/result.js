const mongoose = require('mongoose');
const {Schema} = mongoose;
// Result Schema
const resultSchema = new Schema({
	name: String
});

const Result = module.exports = mongoose.model('Result', resultSchema);

// Get Results
module.exports.getResults = (callback, limit) => {
	Result.find(callback).limit(limit);
}

// Add Result
module.exports.addResult = (result, callback) => {
	console.log(result)
	Result.create(result, callback);
}
