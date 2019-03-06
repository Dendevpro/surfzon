// Required dependencies
var inquirer = require('inquirer');
var mysql = require('mysql');
var Table = require('cli-table');


// Define the MySQL connection parameter s
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,

    // Username
    user: 'root',

    // Password
    password: '',
    database: 'surfzon_db'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    displayTable();
    // startPrompt();
});

// === GLOBAL VARIABLES ===
var chosenItem = {};

// function to display all items for sale
var displayTable = function () {
    connection.query(`SELECT * FROM products`, (err, res) => {
        console.log(res);
        var initTable = new Table({
            head: ['Item ID', 'Product Name', 'Price'],
            colWidths: [5, 30, 10]
        });

        for (var i = 0; i < res.length; i++) {
            initTable.push([res[i].item_id, res[i].product_name, `$${res[i].price}`]);
        }

        console.log(`\n\n${initTable.toString()}\n\n`);
        // ask user to enter ID of item they wish to purchase
        askForID();
    });
};

// function to prompt user to enter ID of the product to purchase
var askForID = function (res) {
    inquirer.prompt({
        name: 'item_id',
        type: 'input',
        message: 'Enter the ID of the product you would like to purchase:',
        // validate input (number from 1-10)
        validate: (value) => {
            if (!isNaN(value) && (value > 0 && value <= 10)) {
                return true;
            }
            else {
                console.log('Please enter a number from 1-10');
                return false;
            }
        }
        // select all rows where ID = user's input
    }).then((answer) => {
        connection.query('SELECT item_id, product_name, price, stock_quantity, product_sales FROM products WHERE ?', { item_id: answer.itemID }, (err, res) => {
            // confirm with user that this is the product they'd like to purchase
            confirmItem();
            console.log(item_id);
        });
    });
};

// function to confirm with user that the product they chose is correct
var confirmItem = function (product, object) {

};

