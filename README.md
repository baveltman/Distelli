The code herein contains a coding exercise completed for Distelli.

The code portrays a single page app with a table component built in React.js
The table contains user information (first name, last name, street, city, state, zip)
The number of results per page are defined by a dropdown in the component
The results are paginated

A note about the process and structure of this app:

I built this app on top of a node.js server and a MySQL database. 
I constructed the server layer to create a true experience of using react to load asynchronous data.
To that end, I populated my MySQL database with a table full of user test data using a script defined in /database/users_schema.sql.
To facilitate async interaction with the data I used my node.js server and express.js to create a RESTful API.
The controller for this API is defined in /controllers/users.js and the routes are defines in routes.js

The React.js code for the component can be found in /public/js/users-table.js
the css for the component can be found in /public/css/users.css

I tried to make this app true to the styles currently employed at Distelli.
To that end, I made use of skeleton css. Rahul, just as you claimed, it was bare bones, elegant and a pleasure to use. 
To further my attempt to stay true to Distelli's styles, Imade use of the header and footer currently found on the Distelli website and appropriated Distelli's mobile-menu.js and main.css
To provide consistency with the fonts currently employed by Distelli I created a file in /public/css/fonts.css and imported Distelli's fonts

Finally, I made use of one open-source css loader and customized it to fit Distelli's styles.
The code for the loader can be found at http://projects.lukehaas.me/css-loaders/
I employed the loader to create a good user experience for a user who is waiting for the initial user data to arrive asynchronously.

Thanks for this opportunity, this was a lot of fun!
