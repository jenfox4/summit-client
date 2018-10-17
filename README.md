# Summit (New England 4,000 Footer Club)
## (Capstone Project for General Assembly Web Immersion Program)

Summit lets you keep track of the 4,000 footers you've climbed and the ones you have left to go. It provides information on each Mountain's elevation, distance to summit, difficulty rating, and current weather conditions!

As a hiker, I had the inspiration for this app because I wanted a way to see how far I was from joining the 4,000 club by AMC. I wanted a way I could "collect" mountain summits as some people collect other things. Although the AMC 4,000 footer website has a lot of information, it is not always a friendly user experience and lacks the ability to include a user's personal hikes. With no other API's available, I web scrapped all the information off the AMC page and seeded it into my own Ruby/ Ruby on Rails database. Then, I started to create a front end. I wanted the user experience to be sleek and minimalist so I designed my own logo, some of my own icons using Photoshop, and imported a sleek and modern font from google fonts and I used Material-UI components for the google appearance that I find to be user friendly. I decided that in addition to elevation and distance to the summit and level of difficulty of the hike, the biggest thing hikers need is temperature and rain information for the next 24 hours. I used Dark Sky API to obtain hourly weather forecast for the next 24 hours at the summit of each mountain. I used this information and paired it with Chartjs to be able to give users a really friendly experience when viewing the temperature at the summit, at sea level, and chance of rain.

**[To get the details on how I implemented each process, check out the development process below](##development-process)**

## Test out the app!
To try out the app for yourself, go to the deployed url:

Use the following demo credentials
**Username:** demo@demo
**Password:** demo

![Image of App](/SummitApp.png)
![Image of App](/SummitApp1.png)
![Image of App](/SummitApp3.png)


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

1. [Web Scrapping from AMC 4,000](how-to-readmes/WEBSCRAPPING.md)
2. [Custom logos and icons, Google Fonts](how-to-readmes/CUSTOMDESIGN.md)
4. [Material-UI](how-to-readmes/MATERIALUI.md)
5. [Dark Sky API](how-to-readmes/DARKSKY.md)
6. [Chartjs](how-to-readmes/CHARTJS.md)

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
* [Google Fonts](https://fonts.google.com/) - Used for a light and modern font type
* [Google Sheets Webscrapping](https://www.google.com/sheets/about/) - Webscrapped data for mountains
* [Chartjs](https://www.chartjs.org/) - Used for Mountain Weather Charts and Accomplished Mountains Chart
* [Dark Sky API](https://darksky.net/dev) - Used for weather information
* [4,000 Club Data/Images](http://4000footers.com/) - Web scrapped data from here.

## Author
* **Jennifer Fox** - [Portfolio](https://jenfox4.github.io/)

## Acknowledgement
I could not have set up Dark Sky API without the help of Simon. He is the OG of Dark Sky API setup. Thanks for all your help, Simon!
[Check out his work](https://git.generalassemb.ly/SimonPringleWallace)
