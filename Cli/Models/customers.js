var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var customerSchema = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    phone: {type: String},
    email: {type: String}
});

module.exports = mongoose.model('Customer', customerSchema);
