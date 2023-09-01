const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')

connectToMongo();
const app = express();

const port = 5000;

//To use req.body we have to use this : 
app.use( express.urlencoded({ extended: true }) );
app.use( express.json() );

/*CORS: Cross origin Resource Sharing is a middleware function that is used to enable 
Cross-Origin Resource Sharing (CORS) in your application. CORS is a security feature
implemented by web browsers to prevent web pages from making requests to a different 
domain than the one that served the web page.
*/
app.use(cors());    

// Available Routes
app.use('/api/auth' , require('./routes/auth'))
app.use('/api/notes' , require('./routes/notes'))

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})