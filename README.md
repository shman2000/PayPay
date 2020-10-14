This project shows limited part of frontend (3 screens) and a very simple server (3 API calls). 
I have used MongoDB, cloud hosted, so you should be able to run it without any additional configuration.

Implemented using: Javascript + React + Tailwind CSS + MongoDB
Used React Hooks.
I have created 2 modes (limited): Admin and Employee.



### Admin Mode:
* employees list
* add employee
* review requests list

Employees list is quite standard. I would create componets for table, pagination etc if there would be more time, same code is used on both lists.
From employee list you can click on "Add Employee" button. Adding employees works, no error handling, but there is a simple component "useForm" which makes form handling easier.
In perfect conditions I would add there error handling or look for library which would do it.

Pagination and search is just displayed with mock data.

Review request list is very simplified. I just display there a few key information: name, how many peope has been assigned to do a review, how mnay completed review and avarage score. Admin should have also access to any comments added during review by employees.



### User mode:
* review requests list

Filtering by role is not added, some fields should be hidden for users without admin access.



### Backend Server

Super simple server using MongoDB with only 3 routes:

* /employees
* /addEmployee
* /reviews

In real life project I would use Mongoose to define schemas. I would also use nanoid for IDs, MongoDb default ObjectId are too easy to predict.
Proper server error handling also is needed. And for production I would use PM2 or similar solution.
Server structure would be divided into logical modules. If it is done right, it's easy to migrate later to microservices if needed.



### Tests

Not even touched that topic. I would use Jest for frontend and Mocha for backend most probably. 
E2E test also would be needed for frontend, I would use webdriver.io for it.




### To start

npm i
npm start
cd backend
npm i
npm run dev



### Answering your questions

* Assumptions you make given limited requirements

I assumed that this will be an internal use system (part of MVP). 

* Technology and design choices

I used the stack I'm familiar with. I didn't use hooks too much before, so there was a bit digging in docs.

* Identify areas of your strengths

Fast learning, good frontend skills (except design part, I prefere it done by graphic designer), strong backend skills. 



Kamil Kwiecien























# Full Stack Developer Challenge
This is an interview challengs. Please feel free to fork. Pull Requests will be ignored.

## Requirements
Design a web application that allows employees to submit feedback toward each other's performance review.

*Partial solutions are acceptable.*  It is not necessary to submit a complete solution that implements every requirement.

### Admin view
* Add/remove/update/view employees
* Add/update/view performance reviews
* Assign employees to participate in another employee's performance review

### Employee view
* List of performance reviews requiring feedback
* Submit feedback

## Challenge Scope
* High level description of design and technologies used
* Server side API (using a programming language and/or framework of your choice)
  * Implementation of at least 3 API calls
  * Most full stack web developers at PayPay currently use Java, Ruby on Rails, or Node.js on the server(with MySQL for the database), but feel free to use other tech if you prefer
* Web app
  * Implementation of 2-5 web pages using a modern web framework (e.g. React or Angular) that talks to server side
    * This should integrate with your API, but it's fine to use static responses for some of it 
* Document all assumptions made
* Complete solutions aren't required, but what you do submit needs to run.

## How to complete this challenge
* Fork this repo in github
* Complete the design and code as defined to the best of your abilities
* Place notes in your code to help with clarity where appropriate. Make it readable enough to present to the PayPay interview team
* Complete your work in your own github repo and send the results to us and/or present them during your interview

## What are we looking for? What does this prove?
* Assumptions you make given limited requirements
* Technology and design choices
* Identify areas of your strengths
