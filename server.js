var express = require ("express")
var app = express()
var port = process.env.port || 3000;

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));


const cardList = [
    {
        title: "Flower 2",
        image: "images/flower-2.jpg",
        link: "About Flower 2",
        desciption: "Demo desciption about flower 2"
    },
    {
        title: "Flower 3",
        image: "images/flower-3.jpg",
        link: "About Flower 3",
        desciption: "Demo desciption about flower 3"
    }
]


app.get('/api/mycardsprac4', (req, res) => {
    res.json({ statusCode: 200, data: cardList, message:"Success"});
})

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