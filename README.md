
# bootswatch

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.7.3.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [SQLite](https://www.sqlite.org/quickstart.html)

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.  

I add Menus service in folder client/app/service and was referenced in client/app/app.js  

I have put a menu item called Account on top nav which will redirect to  setting page where you can select the theme   

For google login you need to edit server/cofig/local.env.js  to  have domain same as your server url with port:8080(And tell me your server url so that I could change in my google oauth service for that)  

You can either register and sign on or sign on with Google directly and go to account make changes on theme and log back to see the saved theme  


I update the main.controller.js in client/app/main to load the user theme after login in  

Also update account settings controller in client/app/account/settings to add change theme function  

I add Menus service in client/app/service  and modify client/app/app.js to add menuItem using menu service  

In the server end I add change theme function to save theme in sqlite database, when create new user, theme was set to "default"    

For changing the theme I replace the boostrap css file original href to the theme one user selected and browser will load the bootsrap with that theme.  

In the main controller,code is mainly responsible for load the theme after login and makes to bootswatch page work as original website  








# ng-admin-bootswatch
Demo of Angular + Admin theme + bootswatch
