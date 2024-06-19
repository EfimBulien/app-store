# iPhone Store

This is a React-based web application for an online iPhone store. It includes features like a product catalog, shopping cart, favorite products, and a contact form.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/EfimBulien/app-store.git
    cd app-store
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. Ensure the backend server is running (this example assumes you have a JSON server or another backend setup):
    ```bash
    npm run server
    ```

## Usage

- Navigate to the homepage to see the product catalog.
- Use the search bar and category filter to find specific products.
- Add products to your cart or favorites.
- View your cart and adjust quantities or remove items.
- Submit the contact form to send a message via EmailJS.

## Features

- **Product Catalog**: Browse a list of products with details.
- **Search and Filter**: Search for products by name and filter by category.
- **Shopping Cart**: Add products to the cart, update quantities, and view the total price.
- **Favorites**: Mark products as favorites and view them separately.
- **Contact Form**: Submit messages through a contact form with EmailJS integration.
- **Animations**: Smooth animations using `framer-motion`.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Bootstrap**: UI framework for responsive design.
- **React Hook Form**: Library for managing forms in React.
- **Axios**: Promise-based HTTP client for making API requests.
- **EmailJS**: Service for sending emails directly from JavaScript applications.
- **Framer Motion**: Library for animations.
- **JSON Server**: Simple backend for serving data from a JSON file.

## Project Structure

/src
/components
- Header.js
- Footer.js
- ProductList.js
- Catalog.js
- Cart.js
- ContactForm.js
/assets
- styles.css

    App.js
    index.js
    /db.json


- `components`: Contains all the React components used in the project.
- `assets`: Contains static files like CSS styles.
- `App.js`: The main app component.
- `index.js`: Entry point of the React application.
- `db.json`: Mock database for products and cart data.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

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
