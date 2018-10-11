# Summit (New England 4,000 Footer Club)
## (Capstone Project for General Assembly Web Immersion Program)
Keep track of the all the New England Mountains that you've climbed with Summit! See stats on each 4,000 footer in New England and mark the ones you've summited!

This app allows users to keep track of all the mountain peaks he/she has reached in New England. The app has a dashboard for user stats to see how close the user is to reaching the 4,000 footer club by AMC. The app also includes important hiker information such as weather at the summit and base as well as chances of precipitation.

## Test out the app!
To try out the app for yourself, go to the deployed url:

Use the following demo credentials
**Username:** demo@demo
**Password:** demo

## Installation Guide
### Front End Installation (this repo)
1. Fork and Clone this repository.
2. Install dependencies with `npm install`.
3. Run the development server with npm start.

### Back end Installation (https://github.com/jenfox4/summit-api)
1. Fork and Clone this repository.
2. Install dependencies with `bundle install.`
3. Run the development server with npm start.
4. Create a .env for sensitive settings (`touch .env`).
5. Generate new development and test secrets (`bundle exec rails secret`).
6. Store them in .env with keys `SECRET_KEY_BASE_<DEVELOPMENT|TEST>` respectively.
7. Set up a Heroku server
8. Set up your database with the following:
  - `bin/rails db:drop` (if it already exists)
  - `bin/rails db:create`
  - `bin/rails db:migrate`
  - `bin/rails db:seed` (seeds the mountains csv in lib/seed)
9. Run the API server with `bin/rails server` or `bundle exec rails server.`

## Planning Process
Before touching any coding I thought about 3 things: what are my user stories, what are my database needs, and what are the steps to get these things in production. I started with my user stories. I broke user stories into 3 categories: what information does my user want to know? what design would they like their information presented in? what CRUD actions does the user have to do? By breaking my user stories into 3 categories I was able to get a clear vision for the database need, stylistic needs, and action items. I then created a basic wireframe to get at the design needs and an Entity Relationship Diagram to outline my vision. Lastly, I created a to do list of items in order of priority to accomplish all the MVP by the four day deadline.

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
[Wireframes](planning/)

I initially started with a pretty basic idea of listing the mountains and keeping a minimal style. I became inspired throughout the project to stick with a minimalist, sleek design using minimal amount of colors and a light and airy font. I created a logo that was simple and modern to fit the theme. I stuck with pastel colors that represented the modern airy style I tried to achieve. I tried to practice my design skills in this project as it's something I don't feel I am that strong at.

#### Entity Relationship Diagrams (ERD)
[ERD](planning/ERD.png)

Because I focused so heavily on web scraping and collecting data on the back-end, I wanted my relationships to be fairly simple. I created users and mountains and created a join table where users can keep track of the mountains they have completed. The serializers are set up so that you can easily view users through mountains and mountains through user. This back-end setup made the front-end easy to navigate.

## Development Process
#### Front-End Development
I started with basic CRUD actions. The most basic CRUD action of all was to index all mountains and index the user's completed summits. Next, I created the mountain info page where user could view states on a single mountain whether that mountain was in their list of the all mountains list. The next step in CRUD was to create and delete the users completed summits. Finally, I worked on the ability for a user to update their notes on a mountain they have summited.

Once basic CRUD actions were down, I really focused heavily on the Front-end design. Specifically, I wanted to improve my understanding of design principles and make a really sleek and inspiring interface that users really love.

In addition, I wanted to practice some data visualization libraries. Thus, I worked with Chartjs to display data of temperature and precipitation of the each mountain as well as using a doughnut chart to display the percentage of the hike complete.

#### Back-end Development
Because of the linear table-like relationship of the mountains and mountain data, I decided to use a SQL database via Ruby on Rails. After setting up Heroku and the basics of an API, I created the resources mountains and completed_summits. After setting up the resource Model, Controller, Routes, and relationships to each other and the user, I had to begin seeding the data.

In this project, I wanted to have all the New England 4,000 mountain data for users to view and add to their list. However, I struggled to find a CSV or an API that had all the data for the New England Mountains. So, I went to the AMC 4,000 club website and web scraped all the information for each Mountain using some jQuery and google sheets features. Once I had all the data into google sheets, I exported the data into a CSV. However, there were some formatting issues. I decided before I seeded the database that I would clean up the database using some excel features such as find & replace and text to column. I converted all coordinates from degrees to decimal format in anticipation of using Google's API for maps. I made sure there were no odd gaps or punctuation.

After having a clean CSV file of all the mountains in New England, I created a script to seed the data into the database. I then seeded all the mountains into Mountains table. Users can now see a variety of information about each mountain!

The other challenge on the back-end was working with the third party API Dark Sky. In order to access the API, I had to set up an API Key in my .env which required creating a route, a model, and controller for the forecast. There was some difficulty in navigating how to pass in Latitude and Longitude into a get request and work that with my route and controller.

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
1. Continue working on making the app Mobile Responsive
2. Style the flash messages to be consistent in the modern and airy design
3. Use AWS services to store images of the mountains permanently instead of using other people's URL's
4. Integrate google maps so that users can toggle between list view and map view
5. Include a topographic map with mountain view that that users can see hike elevation guide
6. Create an Open API for the information I've web scrapped for future projects!

## Links
* [Back-end repo](https://github.com/jenfox4/summit-api)
* [Front-end repo](https://github.com/jenfox4/summit-client)
* [Heroku deployment](https://summit-four-thousand-club.herokuapp.com/)
* [Front-end deployed](https://jenfox4.github.io/summit-client/)

## Built With
* [React JS](https://reactjs.org/) - The web framework used
* [NPM](https://www.npmjs.com/) - Dependency Management
* [Bootstrap/CSS/Sass](getbootstrap.com/) - Styling
* [JavaScript](https://www.javascript.com/) - Programming Language
* [Ruby on Rails](https://rubyonrails.org/) - Backend Development
* [Material-UI](https://material-ui.com/) - UI card component
* [Google Fonts](https://fonts.google.com/)
* [Google Sheets Webscrapping](https://www.google.com/sheets/about/)
* [Chartjs](https://www.chartjs.org/)
* [Dark Sky API](https://darksky.net/dev)
* [4,000 Club Data/Images](http://4000footers.com/)

## Author
* **Jennifer Fox** - [Portfolio](https://jenfox4.github.io/)

## Acknowledgement
I could not have set up Dark Sky API without the help of Simon. His the OG of working with this API and getting things to be flawless.
[Check out his work](https://git.generalassemb.ly/SimonPringleWallace)
