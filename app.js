const express = require('express');

//  Instantiate express module:
const app = express();

//  Declare a route:
app.get('/:message', function(request, response, next) {
  const { message } = request.params;
  // console.log(message);
  return response.json(message);
});

// Set the port to serve the app on
const port = 3000;

// App uses listen() method to listen on port 3000,
// runs a callback that logs the port in a template string.
app.listen(port, function() {
  console.log(`Listening on port: ${port}`);
});
