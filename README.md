Intro to LocalStack & AWS Lambda (NodeJS)
https://medium.com/@taman.gupta98/how-to-kick-start-with-localstack-aws-lambda-3e4a1b3fc26f

LocalStack is a cloud service emulator that runs in a single container on your laptop or CI environment. This is a demo of how you can deploy and test the Lamda function on LocalStack

AWS Lambda - event based serverless computing service

Prerequisites - Docker

index.js - this file is the main entry file for lambda and it contains the handler function. When the lambda is invoked then it runs this handler method and you will see the console statement inside your terminal. This method expects three arguments, event, context and callback. 
The Lambda function handler is the method in your function code that processes events. When your function is invoked, Lambda runs the handler method. When the handler exits or returns a response, it becomes available to handle another event.
Event object - JSON formatted document that containst data for a Lamda function to process. The lambda runtime (supports multiple languages through the use of runtimes) converts the event to an object and passes it to your function code
Context object - passed to your function by a lambda runtime, this object provides methods and properties that provide information about the invocation, function and runtime env

Docker-compose.yml - this file is used to start localstack inside the docker container with some additional environments and configurations

trust-policy.json - this file is used to define IAM role that grants the function permission to access resources and services

Once all the above steps are done, open your terminal inside the app directory and run the command. This will start aws services on a specific port & the default port is 4566 for most of the services.

docker-compose up
Now, create a zip of your index.js file and name it ‘index.zip’. Here we have only one index.js file but for you, there might be other files like package.json and node_modules, you can include them too.