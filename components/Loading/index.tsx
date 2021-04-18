import React from "react";
import styled from "styled-components";
import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <Container>
      <img
        src="https://i.redd.it/ra3fqmi60ct61.jpg"
        alt=""
        style={{ marginBottom: 0 }}
        height={200}
      />
      <Circle size={60} />
    </Container>
  );
}

export default Loading;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;
