var Express = require("express");
var Mongoclient = require("mongodb").MongoClient;
var cors=require("cors");
const multer=require("multer");


var app=Express();

app.use(cors());
app.use(Express.urlencoded({ extended: true })); // Add this line
app.use(Express.json()); // If you also want to parse JSON bodies
var CONNECTION_STRING = "mongodb+srv://admin:Aa123456@cluster0.fxawmkk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



var DATABASENAME="notetaker";
var database
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
        database=client.db(DATABASENAME);
        console.log("Mongo DB COnnection Successful");
    })
})

app.get('/api/notetaker/GetNotes', (request,response)=>{
    database.collection("noteappcollection").find({}).toArray((error,result)=>{
        response.send(result);
    })
})

app.post('/api/notetaker/AddNotes',multer().none(),(request,response)=>{
    database.collection("noteappcollection").count({},function(error,numOfDocs){
        database.collection("noteappcollection").insertOne({
            key:numOfDocs+1,
            title:request.body.title.toString(),
            content:request.body.content.toString()
        });
        response.json("Added Successfully");
    })
})

app.delete('/api/notetaker/DeleteNotes', (request, response) => {
    database.collection("noteappcollection").deleteOne({
        key: request.query.key
    }, (error, result) => {
        if (error || result.deletedCount === 0) {
            console.error("Failed to delete note", error);
            response.status(500).send("Error deleting note");
            return;
        }
        response.json("Deleted Successfully");
    });
});
