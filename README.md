# An E-commerce application using ReactJS and Strapi(for Backend, database and API)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Visit [Template](https://github.com/Lagnajit09/react-E-Commerce/tree/front-end) for the Frontend part to build your own e-commerce application.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Download the project zip folder and unzip it at 

`C:\Users\HP\Desktop\E-commerce\client`



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

### .env file 

```
  REACT_APP_API_TOKEN = *your-api-token* 
  REACT_APP_API_URL = http://localhost:1337/api
  REACT_APP_UPLOAD_URL = http://localhost:1337
```


## HOME PAGE
![Screenshot 2024-01-16 215644](https://github.com/Lagnajit09/react-E-Commerce/assets/105072858/4936b4f5-90a9-41cb-97d3-43a77546e480)
![Screenshot 2024-01-16 215757](https://github.com/Lagnajit09/react-E-Commerce/assets/105072858/7d5beca4-b89f-499e-919e-3cab7a759404)

## CATEGORY PAGE
![Screenshot 2024-01-16 215824](https://github.com/Lagnajit09/react-E-Commerce/assets/105072858/caa59650-aa41-41f2-8993-1c5b715ea627)

## PRODUCT PAGE
![Screenshot 2024-01-16 215846](https://github.com/Lagnajit09/react-E-Commerce/assets/105072858/fc63e592-574e-49f3-ae90-e41e41f56044)
