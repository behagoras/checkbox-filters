import React from "react";
import movies from "../mocks/movies";
import Movie from "./Movie";
import styled from "styled-components";
const Container = styled.div`
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export default function Movies({ filters }) {
  return (
    <Container>
      {movies.length === 0
        ? movies.map((movie) => <Movie key={movie.id} movie={movie} />)
        : movies
            .filter((movie) => filters.includes(movie.genre))
            .map((movie) => <Movie key={movie.id} movie={movie} />)}
    </Container>
  );
}
