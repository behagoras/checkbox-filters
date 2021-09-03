import React, { useState } from "react";
import styled from "styled-components";
import Filters from "./components/Filters";
import Movies from "./components/Movies";
import genres from "./mocks/genres";
const Container = styled.div`
  padding: 32px;
`;

function App() {
  const [filters, setFilters] = useState([]);
  console.log({ filters });

  return (
    <Container>
      {/* <pre>{JSON.stringify({ filters }, null, 2)}</pre> */}
      <Filters genres={genres} setFilters={setFilters} filters={filters} />
      <Movies filters={filters} />
    </Container>
  );
}

export default App;
