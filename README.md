# Mongo DB assignment Board infinity


# Problem 3: 
Build a product details API
Steps:
1. Create a connection with local or remote Mongo database
2. Build a model in express.js for quotes details
The model should have following parameters of type string:-
productName, price
3. Next build a route shown below and write logic to add a product detail sent from API
into MongoDB database

![image](./problemImage/img1.png)

### Request URL:- http://localhost:3000/product/add
### Request Method:- POST
### Request JSON:- 
{
 "productName": "Cotton Shirt",
 "price": "200"
}

### Response JSON:-
{
 "result": "Success"
}

4.Once product details are saved to database, build another API which can be used to
get all the saved products as shown below:-

![image](./problemImage/img2.png)

### Request URL:- http://localhost:3000/product/getAll
### Request Method:- GET
### Sample Response JSON:-

[
 {
 "productName": "Full Shirt",
 "price": 100
 },
 {
 "productName": "Cotton Shirt",
 "price": 200
 }
]

### Learnings
How to create APIs with database connection in express.js



### `node server`

Runs the server in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

