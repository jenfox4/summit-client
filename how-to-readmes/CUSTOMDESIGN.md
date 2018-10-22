## Custom Design

# Custom Logo
For me, design always starts at the logo. The logo conveys a message of what the rest of the project is going to stand for. I started by using Canva for a logo, but I found a lot of their logos to be too complex or too clunky. My vision was to have a logo with a sleek and minimalist design. I started by googling "Mountain Logo" for inspiration. Once I came up with an idea based on these images, I turned to photoshop where I made a very basic sleek logo with mountains.
![logo](/src/header/logo.png)

To import this logo into the header, I put the logo in the image component and than used the `img` tag.

```JSX
const Header = ({ user }) => (
  <header className="main-header">
    <img
      src={require('./logo.png')}
      className='logo' />
    <h4>Summit</h4>
    <nav>
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)
```
To make the logo the favicon, I copied the image to the `/public` folder and renamed in `favicon.png`. This replaces the react favicon in `/public`. Then in `/public/index.html`, make sure you have the following in the head:

`<link rel="shortcut icon" href="%PUBLIC_URL%/favicon.png">`

# Custom icons
The original card design from Material-UI included a "favorites" button. I liked the idea of having a button that users could click to add the Mountain to their "favorites" or to their "Summited" list. However, I didn't think any of the Maerial-UI icons really got at the idea of adding a summited mountain to a list. So, I decided to create my own. I used Photoshop in addition to an image I found. When the component renders, it checks to see if the mountain is summited and uses the following code to decide what image to render:

`<img
    onClick={this.handleSummitClick}
    alt="mountain"
    className="summit-button"
    title={this.state.summitted? 'Click to unmark this mountain as complete' : 'Click to mark this mountain as complete'}
    src={this.state.summitted? require('./summited.png') : require('./notsummited.png')}>`

On click, the function handleSummitClick will execute which will toggle the src and also send a request to the api to add or delete a summit from the list.

# Google Fonts
Google fonts is massive and has so many different styles of fonts. In your `/public/index.html`, make sure you include the link that Google identifies for you. In my case, I wanted a sleek, modern text. I really liked Quicksand, so the link google provided me was `<link href="https://fonts.googleapis.com/css?family=Montserrat|Quicksand" rel="stylesheet">`. In my css, I just had to include the font family as follows: `font-family: 'Quicksand', sans-serif;`.


# Color Schemes
Whenever I decide on a color scheme for a project, I immediately create a `colors.scss` file that all other styling files have access to. In this file, I name my colors accordingly and keep track of the color palette I have to work from. The reason I do this is to make sure all my hex values across the board are consistent, but also so I don't have way too many colors floating around. An example of my `colors.scss`


```scss
$charcoal: #bbb;
$black: #4a4a4a;
$white: #fefefe;
$light-grey: #f7f7f7;
```

A cool package you can use in Atom text editor to see the colors is [Pigments](https://atom.io/packages/pigments). I highly suggest it to see your color scheme without looking it up.

# Stock photos
For the stock images on the landing page, I used [Pexels](https://www.pexels.com/) which provides free stock images. Each image in the landing page is saved within the component that uses it. I imported the image through css. I names the entire container based on the component, adjusted it's size and added a background of the appropriate image. For example, the sign in page is as follows:

```css
.sign-in-container {
  background-image: url("./signin3.jpg");
  background-size: cover;
  display: flex;
  font-family: 'Quicksand', sans-serif;
  height: 700px;
  justify-content: space-between;
}
```

The reason I made the image a background is so that I could overlay text and auth forms easily.

# Custom Error Handling
I was inspired by UI/UX designers who create cute error handling messages. So I thought of something I could do along the lines of camping and hiking. I found images from [Dreamtime](https://www.dreamstime.com/) of a extinguished campfire and a bonfire and thought it would be a nice touch to make the extinguished fire as part of the error message and the bonfire as part of the success message.
![Error Handling](/fail-success-ui.jpg)
