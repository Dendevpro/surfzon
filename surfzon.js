// ========== Required dependencies ============

var inquirer = require('inquirer');
var mysql = require('mysql');
var Table = require('cli-table');


// ========== Define the MySQL connection parameter ==========

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,

    // Username
    user: 'root',

    // Password
    password: 'mf081030',
    database: 'surfzon_db'
});

// If connection is succesfull display products table
connection.connect(function (err) {
    if (err) throw err;
    console.log(`\n\n` + ",,:'':,,:'':,,:'':,,:'':,,: WELCOME TO SURFZON! :,,:'':,,:'':,,:'':,,:'':,,");
    displayTable();
});

// function to display all items for sale
function displayTable() {
    // Select all data from products table @ database
    connection.query('SELECT * FROM products', function (err, res) {
        // Create a "new Table" to display the inventory
        var table = new Table({
            head: ['Item ID', 'Product Name', 'Department', 'Price'],
            colWidths: [10, 30, 20, 10]
        });
        // Pushes every row from the database table into the 'new Table'
        for (var i = 0; i < res.length; i++) {
            table.push([res[i].item_id, res[i].product_name, res[i].department, res[i].price]);
        }

        console.log(`\n` + table.toString() + `\n`);
        promptCustomer(); // Prompt the user to start shopping
    });
};

// Make sure the user passes only valid integers
function validateInput(value) {
    var integer = Number.isInteger(parseFloat(value));
    var sign = Math.sign(value);

    if (integer && (sign === 1)) {
        return true;
    } else {
        return 'Please enter a whole non-zero number.';
    }
}

// Prompt the user for the product Id and quantity they would like to purchase
function promptCustomer() {

    // Inquirer.js prompts the user
    inquirer.prompt([
        {
            type: 'input',
            name: 'item_id',
            message: 'Please enter the ID of the product you would like to purchase.',
            validate: validateInput,
            filter: Number
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'Enter the number of items you would like to purchase?',
            validate: validateInput,
            filter: Number
        }
    ]).then(function (userInput) {

        var item = userInput.item_id;
        var quantity = userInput.quantity;

        connection.query('SELECT * FROM products WHERE ?', { item_id: item }, function (err, res) {
            if (err) throw err;

            if (quantity <= res[0].quantity) {
                console.log(quantity + " " + res[0].product_name + " was added to your cart");
                updateInventory();
                checkout();

            } else {
                console.log('Sorry, there is only ' + res[0].quantity + " " + 'in stock, please modify your order.');
                displayTable();
            }
            function updateInventory() {
                // Construct the updating query string
                var updateInventory = 'UPDATE products SET quantity = ' + (res[0].quantity - quantity) + ' WHERE item_id = ' + item;

                // Update the inventory
                connection.query(updateInventory, function (err, res) {
                    if (err) throw err;
                })
            }
        })
    })
}




