var express = require("express");
var app = express();
var port = process.env.port || 3000;

let router= require('./routers/router');

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/flower', router);


app.listen(port, () => {
    console.log(`Express server started on port ${port}`);
});