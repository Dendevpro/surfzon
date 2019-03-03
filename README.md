 # SurfZon ![dolphin-icon](https://img.icons8.com/nolan/64/000000/dolphin-logo.png)
SurfZon is an e-commerce web application that takes orders from customers and depletes stock from the store's inventory.

- - - 
## Tools
A **`Node.js`** application making use of the **`Inquirer.js`** takes orders from users and process the transactions. The inventory information is stored in a **`MySQL Database`** that feeds data to the app.

## Mechanics
Running this application will first display all the items available for sale with attributes as __Id__, __Name__, __Department__, __Price__ and __Quantity in Stock__.
    
The app asks the user/customer for the product's **Id** and the **Quantity** they want to purchase. Based on the inventory stored at the database the app will get the customer's input and show the **Total Cost** of the items. If not in stock the message **_"Item is not available"_** will be displayed to the user/customer and the order will be canceled. Note that at every transaction the database keeps the information up to date. 

### Watch Demo!
**Questions**

_- What is the product's id?_

![id](Gifs/Prompt-ID.gif)

_- How many units do you want to buy?_

![quantity](Gifs/Prompt-Quantity.gif)

**Transaction**

If not available in stock

![msg](Gifs/Log-Message.gif)

Otherwise

![total](Gifs/Show-Total.gif)

- - - 
## Project Built With
**_JavaScript_**  |  **_MySQL_**  |  **_Node.js_**  |  **_Inquirer_** 
