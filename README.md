# SurfZon ![dolphin-icon](https://img.icons8.com/nolan/64/000000/dolphin-logo.png)
SurfZon is an E-commerce web application that takes orders from customers and depletes stock from the store's inventory.
- - - 
## Tools
A `MySQL Database` stores the information about the inventory to feed the `Node.js` application that takes orders in and process the transactions.

## Mechanics
Running this application will first display all the items available for sale with attributes as follows:

    * Id
    * Name
    * Department
    * Price 
    * Quantity in stock
    
`Nodejs` asks the customer for the product's ID and the quantity they want to purchase. Based on the inventory stored at the `MySQL Database` the app will get the customer's input and show the total cost of their cart. If the item is not available in inventory the message _"Item is not available"_ will be displayed and the order will be canceled. Note that at every transaction the database keeps the information up to date. 

### Watch Demo!
**Questions** 
_What is the product's id?
![id](Gifs/Prompt-ID.gif)

_How many units do you want to buy?
![quantity](Gifs/Prompt-Quantity.gif)

**Transaction**
If available in stock
![total](Gifs/Show-Total.gif)

Otherwise
![msg](Gifs/Log-Message.gif)
- - - 
## Project Built With
**_JavaScript_**  |  **_MySQL_**  |  **_Node.js_**
