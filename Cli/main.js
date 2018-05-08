var program = require('commander');
var inquirer = require('inquirer');
var mongoose = require('mongoose');


//connect to db
var db = mongoose.connect('mongodb://localhost:27017/cli');


const Customer = require('./Models/customers');

const addCustomer = (customer)=> {
    Customer.create(customer).then(customer=> {
        console.info("New Customer Added");
    })
}

const findCustomer = (name)=> {
    var search = new RegExp(name, 'i')
    Customer.find({$or: [{firstName: search}, {lastName: search}]})
        .then(customer=> {
            console.info(customer);
            console.log(customer.length + " Matches");
        })
};


const updateCustomer = (_id, customer)=> {
    Customer.update({_id}, customer)
        .then(customer=> {
            console.log("Customer Updated");
        })
};
const removeCustomer = (_id)=> {
    Customer.remove({_id})
        .then(customer=> {
            console.log("Customer Removed");
        })
};

const listCustomer = ()=> {
    Customer.find({})
        .then(customer=> {
            console.info(customer);
            console.log(customer.length + " Customers");
        })
};

module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomer
}
