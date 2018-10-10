# Summit (New England 4,000 Footer Club)
## (Capstone Project for General Assembly Web Immersion Program)
Keep track of the all the New England Mountains that you've climbed with Summit! See stats on each 4,000 footer in New England and mark the ones you've summited!

This app allows users to keep track of all the mountain peaks he/she has reached in New England. The app has a dashboard for user stats to see how close the user is to reaching the 4,000 footer club by AMC.

## Test out the app!

To try out the app for yourself, go to the deployed url:

Use the following demo credentials
**Username:** demo@demo
**Password:** demo

## Planning Process

Before touching any coding I thought about 3 things: what are my user stories, what are my database needs, and what are the steps to get these things in production.

I started with my user stories. I broke user stories into 3 categories: what information does my user want to know? what design would they like their information presented in? what CRUD actions does the user have to do? By breaking my user stories into 3 categories I was able to get a clear vision for the database need, stylistic needs, and action items.

I then created a basic wireframe to get at the design needs and an Entity Relationship Diagram to outline my vision.

Lastly, I created a to do list of items in order of priority to accomplish all the MVP by the four day deadline.

#### User Stories
* A hiker wants to know how many miles until the summit.
* A hiker wants to know the location of the mountain.
* A hiker wants to know how strenuous the hike is.
* A hiker wants to know what feature each hike has.
* A hiker wants to know how many peeks of the 4,000 club they've submitted.
* A hiker wants to know the elevation of their hike.
* A user wants to have an easy to use interface with minimal buttons.
* A user wants to be able to see pictures of the mountains.
* A user wants to be able to toggle between map view and list view.
* A user wants to be able to see all the mountains in the 4,000 club.
* A user wants to be able to see mountains they have summited.
* A user wants a modern design utilizing UI/UX principles.
* A user wants to create an account.
* A user wants to update their password.
* A user wants to sign in/ log out.
* A user wants to mark that they have climbed a particular mountain.
* A user wants to get all mountains.
* A user wants to get only mountains they have climbed.
* A user wants to see stats on all the mountains they have climbed.

#### Wireframes
I initially started with a pretty basic idea of listing the mountains and keeping a minimal style. I became inspired throughout the project to stick with a minimalist, sleek design using minimal amount of colors and a light and airy font. I created a logo that was simple and modern to fit the theme.

#### Entity Relationship Diagrams (ERD)

## Development Process

#### Front-End Development
I started with basic CRUD actions. The most basic CRUD action of all was to index all mountains and index the user's completed summits. Next, I created the mountain info page where user could view states on a single mountain whether that mountain was in their list of the all mountains list. The next step in CRUD was to create and delete the users completed summits. Finally, I worked on the ability for a user to update their notes on a mountain they have summited.

Once basic CRUD actions were down, I really focused heavily on the Front-end design. Specifically, I wanted to improve my understanding of design principles and make a really sleek and inspiring interface that users really love.

#### Back-end Development
Because of the linear table-like relationship of the mountains and mountain data, I decided to use a SQL database via Ruby on Rails. After setting up Heroku and the basics of an API, I created the resources mountains and completed_summits. After setting up the resource Model, Controller, Routes, and relationships to each other and the user, I had to begin seeding the data.

In this project, I wanted to have all the New England 4,000 mountain data for users to view and add to their list. However, I struggled to find a CSV or an API that had all the data for the New England Mountains. So, I went to the AMC 4,000 club website and web scraped all the information for each Mountain using some jQuery and google sheets features. Once I had all the data into google sheets, I exported the data into a CSV. However, there were some formatting issues. I decided before I seeded the database that I would clean up the database using some excel features such as find & replace and text to column. I converted all coordinates from degrees to decimal format in anticipation of using Google's API for maps. I made sure there were no odd gaps or punctuation.

After having a clean CSV file of all the mountains in New England, I created a script to seed the data into the database. I then seeded all the mountains into Mountains table. Users can now see a variety of information about each mountain!

##### Catalog of Routes:

###### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/`    | `users#changepw`  |
| DELETE | `/sign-out/`           | `users#signout`   |
| GET    | `/users/:id`           | `users#show`      |


###### Mountains

| Verb   | URI Pattern              | Controller#Action   |
|--------|--------------------------|---------------------|
| GET    | `/mountains`             | `Mountains#index`   |
| GET    | `/mountains/:id`         | `Mountains#show`    |

###### CompletedSummits

| Verb   | URI Pattern             | Controller#Action          |
|--------|-------------------------|----------------------------|
| POST   | `/completed_summits`    | `CompletedSummits#create`  |
| GET    | `/completed_summits`    | `CompletedSummits#index`   |
| GET    | `/completed_summits/:id`| `CompletedSummits#show`    |
| PATCH  | `/completed_summits/:id`| `CompletedSummits#update`  |
| DELETE | `/completed_summits/:id`| `CompletedSummits#destroy` |

### Future Goals

## Links

* [Back-end repo]()
* [Front-end repo]()
* [Heroku deployment](https://summit-four-thousand-club.herokuapp.com/)
* [Front-end deployed]()
*

## Built With

* [React JS]() - The web framework used
* [NPM](https://www.npmjs.com/) - Dependency Management
* [Bootstrap/CSS/Sass](getbootstrap.com/) - Styling
* [JavaScript](https://www.javascript.com/) - Programming Language
* [Ruby on Rails]() - Backend Development
* [Material-UI]()
* [Google Fonts]()

## Authors
* **Jennifer Fox** - *Front-end Lead* - [Github](https://github.com/jenfox4)
