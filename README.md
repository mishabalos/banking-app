# BANKING APP IN REACT JS 

## A simple admin banking app designed to assist bank employees in manually managing account creation, deposits, withdrawals, and balance transfers efficiently. 

### Scenario
The user is a bank employee who manually manages the bank's accounts. He does the creation of account manually using the account holders name and sets the initial balance of the account if possible. He also does the withdrawal and deposit manually for each account. He also does the transfer of balances if there are requests for it. Your task is to help this poor employee out by creating a simple admin banking app.

[Live-Demo-Banking-App](https://misha-banking-app.netlify.app/) 

### Objective
A banking app created by React JS

### FEATURES:
  * a page to display all users where the name and balance are visible
  * a Create Account page for creating a new user
  * a Transaction page for deposit, withdraw, and transfer

### DEMO ACCOUNT CREDENTIALS
Use the following credentials to test the app

For Admin
```email: admin123@gmail.com
password: admin123```

For User
```email: hidilyndiaz@gmail.com
password: hidilyn123```

[Live-Demo-Banking-App](https://misha-banking-app.netlify.app/) 


### Functions: 
Here are the required functions:

create_user(user, balance)
- function creates new user in the system
- New user has zero balance (or an optional initial balance)
- user (argument) is any string value

deposit(user, amount)
- increases user's balance by amount value
- returns new_balance of the user

withdraw(user, amount)
- decreases user's balance by amount value
- returns new_balance of the user

send(from_user, to_user, amount)
- decreases from_user's balance by amount value
- increases to_user's balance in amount value
- returns balance of from_user and to_user in given format

get_balance(user)
- returns balance of the user in given format (₱xx,xxx.xx or Phpxx,xxx.xx)

list_users()
- returns all users

Error Handling
- wrong_arguments (e.g. amount cannot be negative, name cannot start with a number)
- user_already_exists ('Den' == 'den')
- user_does_not_exists ('Den' == 'den')
- not_enough_money
- sender_does_not_exists
- receiver_does_not_exists

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
