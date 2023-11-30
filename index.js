const express = require("express");
const app = express();
const port = 5000;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

app.get("/",(request,response)=>{
    response.send('Welcome to my favourite movie list');
});

app.get("/api/movies",(req,res)=>{
  res.status(200).json(movies);
});

const getMovieById = (req, res) => {
  const id = req.params.id;

  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (movie != null) {
    res.json(movie);
  } else {
    res.sendStatus(404);
  }
};

app.get("/api/movies/:id", getMovieById);
// app.get("/api/movies/:id",(req,res)=>{
//   const searchResult = movies.find((movie) => movie.id == req.params.id);
 
//   if (searchResult) {
//     res.status(200).json(searchResult);
//   }
//   else {
//     res.status(404).send('Movie not found');
//   }
  
// });