
# Shoppy
> Ecommerce store where fashion is taken to the next level. 
> Live demo [_here_](https://pieroguerrero.github.io/shopping-cart/).

## Table of Contents
* [General Info](#general-information)
* [Technologies and Techniques used](#technologies-and-techniques-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)


## General Information
- The objective of the project is to provide a template for future developments that may consume third party APIs.

## Technologies and Techniques used
### Planning and Design:
- Since there is only one resource in the project, it was developmet partially with [Scrum](https://www.scrum.org/resources/what-is-scrum). The duration was 1 month splited in 2-week sprints.
- The planning was done with the [User Story Mapping](https://www.visual-paradigm.com/guide/agile-software-development/what-is-user-story-mapping/) technique, you can find the MVP map [here](https://www.figma.com/proto/sZ8TbKWJWJZQCgri0VfnDn/Shopping-App?node-id=2722%3A3621&scaling=min-zoom&page-id=2722%3A3620).
- The Wireframes implemented and to be on this project were build in Figma and can be found [here](https://www.figma.com/proto/sZ8TbKWJWJZQCgri0VfnDn/Shopping-App?node-id=2689%3A6000&scaling=min-zoom&page-id=2689%3A5984&starting-point-node-id=2689%3A6000&show-proto-sidebar=1).
- The Entity Relationship Diagram (ERD) can be found [here](https://drive.google.com/file/d/1CEhsK9lhT2MILYgbN9bh8OH6CijNRj3g/view?usp=sharing).
- The internal project architecture was implemented following the concepts of the [CLEAN Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html).
- Overal code documentation was done leveraging [JSDocs](https://jsdoc.app/).

### Front-end:
- ReactJS.
- Routing with [react-router v6](https://reactrouter.com/en/main).
- Internal application state managed with the [React Context API](https://reactjs.org/docs/context.html).
- CSS design with [Tailwind CSS](https://tailwindcss.com/). 
- Code Splitting was implemented to reduce loading wating times. This was achieved using [Dynamic Import API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) and [React Lazy loading components](https://reactjs.org/docs/code-splitting.html#reactlazy).
- The web app is 100% responsive.

### Back-end:
- This web app is consumming a third party open-source API called [Fake Store API](https://fakestoreapi.com/). It provides products for Ecommerce stores.
- The API calls are performed with the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
- Part of the data provided from API was stored in case the Fake Store API goes down or out of service.

### Testing:
- Unit testing was done.
- Test coverage is 25% and is increasing using Jest and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) is being used.
- While testing, the project was run using the Chrome's Development Tools "Fast 3G" and "No Caching" options. So the app is ready for slow internet connections.

## Features

- View Landing Page ✔
- Search product by Category and by Name ✔
- View Product details ✔
- Add Product to the Shopping Cart ✔
- View and Interact with the Shopping Cart ✔
- View and Interact with the Check-out page ✔
- Sign-up and Logging 🔜
- Perform Check-out 🔜
- Follow-up on order delivery 🔜
- Provide feedback to the product 🔜


## Screenshots
Click on the image to enlarge.

| Landing Page | Landing Page responsive | Store |
| ------------ | -------------- | ------------- |
| <img src="https://user-images.githubusercontent.com/26049605/188336928-b488445d-0025-434e-afc5-80ca4c11c47c.png" width="350px" height="auto" alt="Landing Page" title="Click to enlarge">   | <img src="https://user-images.githubusercontent.com/26049605/188336912-76a1cc10-77fe-4589-9019-b2907459f85e.png" width="200px" height="auto" alt="Landing Page" title="Click to enlarge">     | <img src="https://user-images.githubusercontent.com/26049605/188336933-d2029af7-3c18-4557-ad5c-eb663b60be62.png" width="350px" height="auto" alt="Store" title="Click to enlarge">    |

## Setup
Clone this project by doing:
```
$ git clone https://github.com/pieroguerrero/shopping-cart.git
```
Then go to the folder you cloned the code and execure:
```
$ npm install
```
**WARNING:** If you are going to use other libraries to achieve other purposes be carefull and remove the caret (^) prefix that the dependency versions have.

## Project Status
Project is: _in progress_

## Room for Improvement
There are always room for improvement, in this project so far the thinkgs that can be improved are:
- Move the Back-end to work with its own API services.
- More Unit testing coverage.
- Use Redux instead of the React Context API.
