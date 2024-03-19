var express = require ("express")
var app = express()
var port = process.env.port || 3000;

// app.get('/addTwoNumbers', function(request, response){

//     let num1 = parseInt(request.query.num1);
//     let num2 = parseInt(request.query.num2);

//     if (isNaN(num1) || isNaN(num2)) {
//         return response.status(400).json({error : "Invalid Parameters! Please enter numbers."})
//     }

//     let data = num1 + num2;
//     let message = "success";
//     let statusCode = "200";
    
//     response.json({data, message, statusCode})
// })


app.listen(port, ()=> {
    console.log("App listening to: " + port)
})