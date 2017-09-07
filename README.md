# Clean Code Task #
This task is intended to examine your clean code practices. It assumes you have OOP knowledge and some understanding of software architecture.

## How your work is reviewed ##
This task requires no GUI abilities. We don't mind styling in this task.  
The goal of this task is to help us identify what you consider as clean code and how you would approach an architecture problem.

The important topics for us in reviewing your code are:
* **OOP principles**: Doe's your code follow Object Oriented S.O.L.I.D principles?
* **Architecture**: How well presentation is separated from business logic?
* **Code Quality & Readability**: Is Your code documented properly for types, either JSDoc or TypeScript (or both)?. Is your code easy to read? Is it simple? Is your naming within your program and markup semantic?
* **Correctness**: Does your code comply with the task?

## The Task ##
We'd want you to choose a UI framework from: AngularJs/Angular/React. Although we are not looking for abilities in **working** within a framework, it will help us identify how well your application is independent of a framework.  
(Try to keep presentation also independent of a framework)

Create a list of users where for each user you will present the following elements:

* First Name
* Last Name
* Title (i.e. Mr./Mrs. etc.) if exist
* Username
* A link to website

The user list data is here: https://jsonplaceholder.typicode.com/users

**Follow these restrictions:**
* Consider the fetching of the list of users as business logic. It should not be dependent on presentation or the framework.
* Your presentation objects should not know about http, asynchronous calls, promises etc. they should depend on simple data structures only (i.e. using then() is not allowed in presentation).
* If any object is dependent on a presentation object it will be considered as responsible for presentation (i.e. if a container component is rendering a presentation component then the container component cannot also fetch the data).

## General Instructions ##
1. Fork this repository to your GitHub account.
2. Clone your fork to your local machine.
2. Create a new branch off master branch and name it with your name like so: first_last.
3. Push your branch to your remote repository.
4. Create a pull request to this original repository.