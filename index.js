const express =  require('express');
const bodyParser = require('body-parser');
const app = express();
const route = require('./router')

app.use(bodyParser.json());


app.use('/',  route)


const PORT = 5555
app.listen(PORT,  () => console.log(`app listining to port number ${PORT}`))