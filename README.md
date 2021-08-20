# MVC in NodeJS

*Idea presented by Parikshit Hooda for Geeks4Geeks*

This is a simple login application demonstrating the MVC design pattern in NodeJS. In the **MVC pattern**, the application and its development its divided into three interconnected parts. The advantage of this is it helps in focusing on a specific part of the application name, the ways information is presented to and accepted from, the user. It helps in allowing for efficient code reuse and the parallel development of the application. 

## Simple explanation

MVC is an acronym for **Model-View-Controller.**

- **Model**: represents the structure of data, the format and the constraints with which it is stored. It maintains the data of the application. 

- **View**: is what is presented to the user. Views utilize the Model and present data in a form in which the user wants. A user can also be allowed to make changes to the data presented to the user. They consist of static and dynamic pages which are rendered or sent to the user when the user requests them.

- **Controller**: controls the requests of the user and then generates appropriate response which is fed to the viewer. Typically, the user interacts with the View, which in turn generates the appropriate request, this request will be handled by a controller. The controller renders the appropriate view with the model data as a response.

### Esentially:

**Model** is data part.
**View** is User Interface part.
**Controller** is request-response handler.

## The folder structure:

The **routes** folder serves as the Controller part of the application
The **models** folder includes a user model.
And the **views** folder which contains the **.handlebars** templates that will be ultimately rendered to the end user
