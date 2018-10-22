### Material-UI Library

[Material-UI Documentation](https://material-ui.com/getting-started/installation/)

## Installation

Install the Material-UI dependencies:

`npm install @material-ui/core`

check your package.json for material-ui


## Component library

Check out the component demos on the left hand side. There are so many components! Below I will show you my code for the Progress bar on page loading. I won't walk through the Card component, but be sure to check it out if you want to see how that is implemented.

# Progress Bar

After installing the progress bar, in a new file labeled loading, I created a Loading component.

```JSX
import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import './loading.css'

const Loading = function Loading(props){
  return (
    <div className='loading-container'>
      <CircularProgress color={'#0275d8'} className='loading' size={100} />
    </div>
  )
}

export default Loading
```
CircularProgress is the component from the component library that I picked. I added some css by giving it a class name and creating loading.css for styling. Now that this component is exported, I can use it in any other rendering I'd like.

Let's use the Weathergraph for an example. The weathergraph often takes a few seconds to show up after the rest of the page has rendered, which doesn't look so sleek. The weathergraph has to make an API call to Dark Sky, so while it makes that API call, the CircularProgress component is a really nice user experience to indicate the information is coming.

```JSX
async componentDidMount() {
  {/* api call */}
}

render () {
  if(this.state.forecast) {
    return (
    {/* some code here that you want to show when forecast is available from api */}
    )
  } else {
    return (
      <Loading />
    )
  }
}
}

export default Weather
```

While the component is mounting, `this.state.forecast` is defined as false. Alternatively, you could use `this.state.loading`. In the constructor component, make sure you define your state component as false and during your api call setState to change it.

When the component is still mounting, the else statement will return which means loading will render. Once the loading is finished, `this.state.forecast` will be true (and carrying all the json), so it will render the code I tell it to.
