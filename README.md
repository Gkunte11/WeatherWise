# This project is created using:
1. FrontEnd: React, Javascript
2. API: OpenWeatherMap API
3. Backend Server: Node js, Express js
4. DataBase: PostGreSql

# Steps for running the application
1. Clone the repo on your machine

2. Create a postgres Database on pgadmin4, that defines city table as follows
##### `create table cities ( id serial NOT NULL, city_name character varying(50) NOT NULL,  PRIMARY KEY(id), UNIQUE(city_name) )`;

3. In the project directory, in server/database/index.js, define the connection to the database:
E.g. on my machine I am using as:
##### `const CONNECTION_STRING = process.env.DATABASE_URL || 'postgresql://postgres:123@localhost:5432/weather-db';`

##### `const CONNECTION_STRING = process.env.DATABASE_URL || 'postgresql://[USERNAME]:[PASSWORD]@localhost:5432/[DATABASE_NAME]';`

4. Mention your API key(from OpenMapWeatherAPI) in server/models/forecast.js
##### `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=[YOUR_API_KEY]&units=imperial`

5. Also add your API key(from OpenMapWeatherAPI) in server/models/weather.js
##### `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=[YOUR_API_KEY]&units=imperial`

6. This completes your setup locally, to start the application
##### `npm run dev`

This will run your server and client side concurrently
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
