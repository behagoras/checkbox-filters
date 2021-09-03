import React from "react";
import {Card} from '@material-ui/core'



export default function Movie(props) {
  const {movie_name,genre,image} = props.movie;
  // console.log({ id, movie_name, genre, image })
  return (
    <Card>
      <p>{movie_name}</p>
      <p>{genre}</p>
      <img src={image} alt={movie_name} />
    </Card>
  );
}
