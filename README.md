# savant-v2

# Synopsis

Savant Records is a record label that offers merchandise, artist development courses, and audio engineering services. This project is the updated version of my e-Commerce project, assigned to me as an apprentice with Road to Hire. This project is fully rendered through React.js. All products are stored in an Amazon RDS database, which is connected to the app through the 'server.js' file.

# Run Commands 

In order to run the application locally, execute the following steps:

    1) Clone the repository to your local machine 
    2) Install all necessary dependencies with the command 'npm install'
    3) Execute the command 'npm start'

A deprecated version of this site is hosted on AWS Amplify at the following link: 

    https://main.d3ffb24jm8m227.amplifyapp.com/merch

    (note: The server.js file must be running in order to populate the products from the database. This can be executed with the command 'npm run server')

# Dependencies 

* Concurrently
* CORS 
* Express.js
* Hero-Slider
* MySQL2
* Node.js
* NodeMon
* React.js
* React-Icons
* React-Router-Dom

# Challenges 

* AWS Amplify Hosting

    - Originally, I was able to host a version of the website on AWS. This version did not include the ProductDetails component, which renders a product details page based on the ID of the selected product. Currently, this functionality only works in local deployment. 

    - I noticed that the products would only display if I ran the server file on my local machine. As a result, I embarked on a 12 hour journey to learn how to host my server. I tried creating an EC2 instance, a Lambda Function, and an Elastic Beanstalk environment, all to my dismay. 

    - I have over 25 builds in AWS Amplify, trying to inject the updated code but I have been unable to accomplish this. 

* Product Details Component 

    - I encountered many challenges while structuring the Product Details component, primarily with pulling the ID from the database and injecting it to the url, and then pulling the correct ID based on user selection. The functionality still is not perfect and does not work with the filtered products but I will continue to develop the app until I fix the issues. 