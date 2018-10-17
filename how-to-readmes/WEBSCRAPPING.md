## Web Scraping Guide

When I originally thought of this idea, I figured there must be an open source API with Mountain information somewhere on the web. In the short turnaround time, I came up empty handed. I decided that my best option was to web scrape information from AMC's 4,000 footer website.

Here's a step by step guide on how I did so, so that maybe you can too!

### Examine the website you want the information from.
The first thing I did was examine [AMC's website](http://4000footers.com/ne.shtml). I noticed for each mountain, the information was presented in a table. This is good, knowing the html makes it easier to web scrape. Having the data in a table form is even easier!

### Get your google sheets up and running.
Google Sheets makes web scraping really simple. The first thing I did was copy and paste the table on the front page of 4000footers.com that contained the name, elevation, and state of every mountain.

### Find the correct URL's to web scrape from.
Now I have a basic list of Mountains. I wanted to get the list of Mountain URL's. Each Mountain's URL would be where I got information for that specific Mountain. So I used some jquery in the console.

`var links = document.querySelectorAll('a');
for(var i = 0; i < links.length; i++){
  console.log(links[i].href);
};`

This code loops through all the anchor tags on the page and console logs them. I grabbed the console log response, and used it to copy over the correct URL's to each mountain in Column 1 of my Google Sheet.

### Collect your information.

Now I have a basic list of Mountains and their respective URL's. Now comes the part of collecting the information. The URL I want to take information from is in Column A. The cell that I want to dump that information in is Column F. Google sheets makes it so easy, all I have to do is use `=IMPORTHTML(URL, Query, Index)`. My URL is in Column A. My Query is in a table on the website as we figured out earlier and by examining the page a bit more in the developer tool with chrome, I see it's in index 8.

`=IMPORTHTML(A2, "Table", 8)`

I put this in the first row and viola! There is a whole chunk of data I need.

### Extracting more specific data.

I didn't want to seed in a whole chunk of text, so I wanted to extract very specific parts of the table I needed. Regex is a really big pain. But, it helps extract the information you need. I can't claim expertise in this, I still am not sure how it all works. But `=REGEXEXTRACT(cell, expression)` is what I used. So, when looking for the ratings, for example I did: `=REGEXEXTRACT(F2, "Rating(.*)")`.

Now I've extracted the hike rating, distance of hike, coordinates, features, etc. I have a full Google Sheets doc of information!

### Turning the info into an API

In order to turn this information into a database, first you need to download your google sheet as a CSV. I saved the CSV in my project under `lib/seeds` as `mountain.csv`. Before seeding into the database, I cleaned up some of the data. I removed columns I did not need.

Now, time to seed into our development database! First, make sure you have created a resource with all the attributes that you want. For Mountains, I wanted the attributes: name, elevation, state, difficulty, distance_to_summit, latitude, longitude, image url, and features.

In my Rails project, I used generate scaffold to create this resource. In the terminal: `bin/rails generate scaffold Mountains name:string elevation:string state:string difficulty:string distance_to_summit:string latitude:string longitude:string image:string features:string`

Check your schema, controller, and models and if everything checks out go ahead and run `bin/rails db:migrate`.

Now, that we have the resource, we can see in the information. Under `db/`, create a file called `seeds.rb`. Here we will tell Ruby how to read our .csv and put it into the the database. The code for that is as follows.

`require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'mountains.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Mountain.new
  t.name = row['MOUNTAIN']
  t.elevation = row['ELEVATION']
  t.state = row['STATE']
  t.difficulty = row['DIFFICULTY']
  t.distance_to_summit = row['DISTANCE']
  t.latitude = row['LATITUDE']
  t.longitude = row['LONGITUDE']
  t.image = row['IMAGE']
  t.features = row['FEATURES']

  t.save
  puts "#{t.name} saved"
end
puts csv_text`

We are simply taking each row header in the csv and assigning it the proper attribute to the resource it creates. I use `puts "#{t.name} saved"` at the bottom just for my own insanity, I can see each mountain printed in the console as it saves. But it's not necessary.

Lastly, we have to run the code. In the terminal, run `bin/rails db:seed`. You'll see all the Mountains printed in the terminal and your database should be complete!

## Checking your work and saving to production.
To check to make sure all your mountains are there, in the terminal run `bin/rails console`. This will open up your database. Type `Mountain.all` (make sure you type your resource singular...that always trips me up). This will show you all the Mountains in your database. Here, you should see all the items you've seeded into your database!

Remember, this is all still in development. So, we also have to see in Heroku or whatever production database you are using.
You should already have heroku up and running and pointed at your project. Hopefully you are also already logged into Heroku from the terminal. In that case, you will just need to migrate and seed.
`heroku run rails db:migrate`
`heroku run rails db:seed`

and you are done! 
