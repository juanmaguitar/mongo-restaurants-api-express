# Restaurants Finder

## Description 

This project is a demo that shows several things explained in the [Skylab Coders](http://www.skylabcoders.com/en/) Bootcamps (Autumn 2016 Edition). It uses the restaurants collection [provided in the official Mongo site](https://docs.mongodb.com/getting-started/shell/import-data/)

Can be seen online at: https://powerful-tundra-88780.herokuapp.com/

## Topics

Topics covered in this demo:

- **API endpoints** using data from a **MongoDb collection** to retrieve data or perform actions:
    + `GET` `/restaurants` → get all restaurants
    + `GET` `/restaurants/borough/:borough` → get restaurants by borough
    + `GET` `/restaurants/cuisine/:cuisine` → get restaurants by cuisine
    + `GET` `/restaurants/cuisine/not/:cuisine` → get restaurants by NOT cuisine
    + `GET` `/restaurant/:id`  → get restaurant by ID
    + `POST` `/restaurant/:id` → update restaurant
    + `GET` `/:id/around/:km` → get restaurants by proximity
    + `GET` `/boroughs`  → get boroughs
    + `GET` `/cuisines`  → get cuisines
- **API endpoints** accepting parameters to filter results
    - `?limit=10` → limit to 10 results
    - `?page=2` → show page 2 according to the limit to 10 results
    - `?show=borough,name` → show only this fields
    - `?hide=_id` → hide these fields
- **Angular App** using this data to display the info to the user
    + **controllers**
    + **directives**
    + **services**
    + **routes**
- Use of **Bootstrap for Angular** `ui.bootstrap`
- Results **pagination**
- **Google Maps**
    + Display coordinates as markers in the map → `marker`
    + Fit the map to markers → `bounds`
    + Zoom the map for details → `setPan`
    + Draggable marker and capture event and new coordinates → `draggable: true`
- **Upload images to AWS (S3)** and get remote link to use it in the DB
- `bower` to manage client dependencies
- `npm` to manage server dependencies

## Installation 

To run local server you need to create a `.env` w/ the following variables...

    S3_BUCKET=XXXXXXXXXXXXXXXX
    AWS_ACCESS_KEY_ID=XXXXXXXXXXXXXXXX
    AWS_SECRET_ACCESS_KEY=XXXXXXXXXXXXXXXX

With this, to start the project you just can do... 

    npm run dev

To run remotely (in heroku) the proper environment variables should be set before deploying...

    heroku config:set S3_BUCKET=XXXXXXXXXXXXXXXXXXXXXXXX
    heroku config:set AWS_ACCESS_KEY_ID=XXXXXXXXXXXXXXXXXXXXXXXX
    heroku config:set AWS_SECRET_ACCESS_KEY=XXXXXXXXXXXXXXXXXXXXXXXX
    heroku config:set DB_URI=mongodb://<%USER%>:<%PASS%>@XXXXXXXXX.mlab.com:00000/xxxxxxxxxxx
    heroku config:set ENVIRONMENT=production





