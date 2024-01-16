# An E-commerce application using ReactJS and Strapi(for Backend, database and API)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Download the project zip folder and unzip it at 

`C:\Users\HP\Desktop\E-commerce\src`



Install node modules in the project directory using the command

`npm install -g node-modules`


For Strapi, create a 'api' folder at root directory i.e.

`C:\Users\HP\Desktop\E-commerce`

In the terminal, `cd ../api`

For installing Strapi, run `npx create-strapi-app@latest .`

Run and give the database details for the application. Finally run `npm develop`  


## My Database design:

![Untitled](https://github.com/Lagnajit09/react-E-Commerce/assets/105072858/703dc869-6b08-4319-8b82-3c00e699b056)

The relations are many-to-many between products, categories and subCategories.
Then you can add your data in the content-manager section.


Go to Settings->API Tokens

Finally, copy your API token and paste in the .env file in the src folder.


