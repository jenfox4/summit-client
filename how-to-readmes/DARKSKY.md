### Dark Sky API (Third Party API tools)

[Dark Sky API Documentation](https://darksky.net/dev/docs)

Shout out to Simon Pringle-Wallace for helping me set this up!

## Create an account and get your secret key

Sign up for Dark Sky API and retrieve your secret key. Although you can start making an api call right away, you don't want your secret key out in the open. You will have to set up a pretty comprehensive back-end to make this work.

In your `.env` file, put your Dark Sky secret keys just under your SECRET_KEY_BASE. In this case, I will put * where your secret key should be.

`DARK_SKY_KEY=***************************************`

## Set up your Model, Controller, and Route

In order for you to access Dark Sky, we will set up a Model, Controller, and Route. However, instead of pointing to our own API or Heroku API, we will set it up to point at the Dark Sky API.

# The Model

Before setting up our model, you'll need to use [httparty](https://github.com/jnunemaker/httparty).

`gem install httparty` and check your Gemfile for `httparty`.

Now, set up a Forecast model to point to our Dark Sky API. Require `httparty` at the top and create a Ruby class for forecast. You will import your Dark Sky Secret Key from .env file. In this case, I am sending Dark Sky longitude and latitude information, so the lat and long are initialized upon defining a forecast. The method weather_data is the rest of the url including the initialized latitude and longitude needed to make an API call to Dark Sky. The method weather is returned the parsed weather data.

```Ruby
# frozen_string_literal: true

require 'httparty'

class Forecast
  include HTTParty
  base_uri 'https://api.darksky.net/forecast'
  DARKSKYKEY = ENV['DARK_SKY_KEY']

  def initialize(long, lat)
    @longitude = long
    @latitude = lat
  end

  def weather_data
    self.class.get("/#{DARKSKYKEY}/#{@latitude},#{@longitude}")
  end

  def weather
    weather_data.parsed_response
  end
end
```

# The controller

Our controller will index a weather response from the API by creating a new instance of the class forecast seen in our model (above). Forecast.new initializes this instance with the long and lat we pass into it. `.weather` is the method defined in our model above that gets the weather data and parses it. Finally, index renders the response in json.

```Ruby
# frozen_string_literal: true

class ForecastController < OpenReadController
  def index
    @weather = Forecast.new(params[:long], params[:lat]).weather
    render json: @weather
  end

  def coordinates
    params.require(:forecasts).permit(:long, :lat)
  end
end
```

# The Route

Now that a controller has been set up, a route can be set up with a simple line in `routes.rb`

`get '/forecast' => 'forecast#index'`

# The Curl Request

Test out your route, controller, and model with a curl request.

The URL for the curl request is going to be your localhost or your heroku because you've set up the model that takes care of redirecting request to the dark sky api. It's a get request as you defined in your Route.

```sh
curl "http://localhost:4741/forecast?lat=${lat}&long=${long}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
```

# Fetch API Call on Front-end

In `api.js`, make an API to get the weather with fetch. In this case, I'm passing in the latitude and longitude and pointing it to the url I used earlier for the curl request.

```JSX
export const getWeather = (lat, long) => {
  return fetch(apiUrl + `/forecast?lat=${lat}&long=${long}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
```
