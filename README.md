# Mongo DB assignment Board infinity


# Problem 1: 
Build an API to add and retrieve college student details from a database
Steps:
1. Create a connection with local or remote Mongo database
2. Build a model in express.js for student details
The model should have following parameters of type string:-
name, collegeName, location
3. Next build a route as shown below and write logic to add student details sent from
API into MongoDB database
Request URL:- http://localhost:3000/student/add
Request Method:- POST
Request JSON:

### Request URL:- http://localhost:8080/student/add
### Request Method:- POST
### Request JSON:- 
{
 "studentFirstName":"John",
 "collegeName": "IIT",
 "location": "Mumbai"
}
### Response JSON:-
{
 "result": "Success"
}
4. Once student details are saved to database, build another API which can be used to
get stored student details based on student name as shown below:-

![image](./problemeImage/img1.png)

## Request URL:- localhost:3000/student/getStudentDetails?name=Ramesh
## Request Method:- GET
## Query Param:- name
## Response JSON:-
{
 "name": "Ramesh",
 "collegeName": "I.I.T.",
 "location": "Mumbai"
}


### `node server`

Runs the server in the development mode.
Open [http://localhost:8080](http://localhost:3000) to view it in your browser.

