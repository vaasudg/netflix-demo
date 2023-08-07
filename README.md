# Project Documentation

[![Deployment on dev](https://github.com/vaasudg/netflix-demo/actions/workflows/workflow.dev.yml/badge.svg)](https://github.com/vaasudg/netflix-demo/actions/workflows/workflow.dev.yml)

## Live

| Link | [https://vaasudg.github.io/netflix-demo/] |
See in the live action [Link](https://vaasudg.github.io/netflix-demo/) (optional).

## `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## `npm run build`

## _Overview_

This project is a Proof of Concept (POC) to showcase the creation of a simple web application with a structure similar to Netflix using ReactJS, TypeScript, JavaScript, HTML, and CSS. We will be using GitHub for version control and GitHub Actions for continuous integration and continuous delivery (CI/CD).

## Getting Started

1. Create a GitHub Repository
   Start by creating a new GitHub repository. You can do this by clicking on the "+" icon on the top right corner of the GitHub interface and selecting "New repository".

2. Set Up Your Development Environment
   Ensure you have Node.js, npm, and a text editor (like VSCode) installed on your machine. Clone the repository to your local machine to begin development.

## Development

1. Create a Page with Image Carousel and Horizontal Rows
   We'll begin by creating a page with an image carousel and horizontal rows of items, similar to Netflix's interface. We'll use hardcoded JSON data to fetch the information and display it on the page. You can use either function or class components, depending on your preference.

2. Write Unit Tests
   For this project, we will be using Jest and the React Testing Library for unit testing.

3. Error Handling
   We'll be handling network errors, server downtime, and 4XX errors using error boundaries in React and the fetch API. CI/CD We will be using GitHub Actions to implement a simple CI/CD pipeline. This pipeline will run our unit tests and build our project whenever we push to the main branch. You can download a sample CI/CD configuration from the GitHub Actions Marketplace and modify it to suit your needs.

## Conclusion

This project does not require hosting and can be run on a local machine.
