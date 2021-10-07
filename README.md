How do we get students and young people to be more engaged in politics and cultural developments; PoliticApp aims to answer that.
Helping people define their ally-enemy distinction



Proof of concept for Amsterdam based PoliticApp.

Scheduled to go live near the end of september 2021.
sharing events and information about the political environment of the city nowadays.

Built in Gatsby.js to be deployed on vercel/zeit-now.

This is a project owned by PoliticApp, please don't copy/publish/steal or violate this repository, content, concept and or website in any way.

had to use "@babel/plugin-proposal-logical-assignment-operators" for polyfilling the nulling coalescing operator not working in the leafletjs.  
This might mess up when we attempt to deploy, depending on whether the server that's going to perform the build will be able to recognize the oprator.
https://babeljs.io/docs/en/babel-plugin-proposal-logical-assignment-operators#with-a-configuration-file-recommended
https://github.com/facebook/create-react-app/issues/9908

all events on the lefletjs maps
https://leafletjs.com/reference-1.7.1.html#map-event

The leafletJs might break in production due to the serverside rendering, to omit this I might need to perform  js check to see if the map is rendered in a real browser
https://www.andrewl.net/article/gatsby-geo-simple-map

https://leafletjs.com/examples/quick-start/
https://egghead.io/lessons/react-change-the-react-leaflet-map-zoomcontrol-location-and-icons


We could use NodeMailer for sending contact forms and other user submissions  
https://nodemailer.com/usage/
or Snedgrid  
https://sendgrid.com/pricing/
could also use GetForm!!  
https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-forms/
https://www.gatsbyjs.com/docs/building-a-contact-form/

