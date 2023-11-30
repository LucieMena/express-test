const express = require("express");
const app = express();

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

module.exports = app;