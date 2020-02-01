const http = require('http');
const app = require('./api/app');
const app1 = require('./api/users/app2');

const port = process.env.PORT || 9090;

const server = http.createServer(app);

/*app.get('/api', function (req, res) {
    res.send('GET request to the homepage')
    
  })
app.post('/api/users', function (req, res) {
    res.send('GET request to the homepage')
    
  })*/
  

server.listen(port);
