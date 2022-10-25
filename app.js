const express=require("express");
const cors=require("cors");
const app=express();

app.use(cors());
app.use(express.json());


let movieData=[
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2_5x/sources/r1/cms/prod/4571/674571-v",
        movieName:"Iron Man",
        releaseDate:"May 2, 2008",
        trailer:"https://youtu.be/8ugaeA-nMTc"
    },
    {
        image: "https://flxt.tmsimg.com/assets/p176337_p_v8_am.jpg",
        movieName:"The Incredible Hulk",
        releaseDate:"June 13, 2008" ,
        trailer:"https://youtu.be/xbqNb2PFKKA"
    },
    {
        image: "https://resizing.flixster.com/nFP6wv-ZKx6YCfalxsjSQOBGSyE=/180x240/v1.bTsxMTIzNjc1ODtqOzE5NDIzOzIwNDg7MTUzNjsyMDQ4",
        movieName:"Iron Man 2",
        releaseDate:"May 7, 2010",
        trailer:"https://youtu.be/wKtcmiifycU"
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_FMjpg_UX1000_.jpg",
        movieName:"Thor",
        releaseDate:"May 6, 2011",
        trailer:"https://youtu.be/Go8nTmfrQd8"
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
        movieName:"The Avengers",
        releaseDate:"May 4, 2012",
        trailer:"https://youtu.be/eOrNdBpGMv8"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTrDFxddLlOoASKQtRtM7BjpF4VLmU0U3tw&usqp=CAU",
        movieName:"The Amazing Spider-Man",
        releaseDate:"May 4, 2007",
        trailer:"https://youtu.be/4aQ0vPpd5X4"
    },
    {
        image:"https://resizing.flixster.com/vK77TbbXQYgkJ2HpvPp1p_W0tj4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FkNDZiMzU2LTFmYTQtNDgwMS1iOWM5LTgxNTg2NDMxNjBmNi53ZWJw",
        movieName:"Doctor Strange",
        releaseDate:"Nov 4, 2016",
        trailer:"https://youtu.be/aWzlQ2N6qqg"
    }
]


app.get("/data",(req,res)=>{
    res.send(movieData);
});


app.listen(5000,()=>{console.log("Application started on port 5000")});

