const express=require("express");
const cors=require("cors");
const app=express();

app.use(cors());
app.use(express.json());


let movieData=[
    {
        movieName:"Iron Man",
        releaseDate:"May 2, 2008"
    },
    {
        movieName:"The Incredible Hulk",
        releaseDate:"June 13, 2008" 
    },
    {
        movieName:"Iron Man 2",
        releaseDate:"May 7, 2010",
    },
    {
        movieName:"Thor",
        releaseDate:"May 6, 2011"
    },
    {
        movieName:"Marvel's The Avengers",
        releaseDate:"May 4, 2012"
    }
]


app.get("/data",(req,res)=>{
    res.send(movieData);
});


app.listen(5000,()=>{console.log("Application started on port 5000")});

