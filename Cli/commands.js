#!/usr/bin/env node

var program = require('commander');
var inquirer = require('inquirer');
var Prompt = inquirer.prompt;
var figlet = require('figlet');
var chalk = require('chalk');
var version = chalk.blue.bold('1.0.0');

var {
    addCustomer, findCustomer, updateCustomer,
    removeCustomer,
    listCustomer
} = require('./main');


figlet.text('Customer Management Cli', {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});

var question = [
    {
        type: 'input',
        name: 'firstName',
        message: 'Customer First Name'
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'Customer Last Name'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Customer Phone Number'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Customer Email Address'
    }
];

program
    .version(version)
    .description(chalk.blue.bgRed.bold('Customer Management'));

/*program
 .command('add <firstName> <lastName> <phone> <email>')
 .alias('a')
 .description("Add a customer")
 .action((firstName, lastName, phone, email)=> {
 addCustomer({firstName, lastName, phone, email})
 })*/


program
    .command('add')
    .alias('a')
    .description("Add a customer")
    .action(()=> {
        Prompt(question).then(answers => addCustomer(answers))
    })


program
    .command('find <name>')
    .alias('f')
    .description("Find a customer")
    .action((name)=> {
        findCustomer(name)
    });

program
    .command('update <_id>')
    .alias('u')
    .description("Update a customer")
    .action((_id)=> {
        Prompt(question).then(answers => updateCustomer(_id,answers))
    });

program
    .command('remove <_id>')
    .alias('r')
    .description("Remove a customer")
    .action((_id)=> {
        removeCustomer(_id)
    });

program
    .command('list')
    .alias('l')
    .description("List all customer")
    .action(()=> {
        listCustomer()
    });

program.parse(process.argv)
