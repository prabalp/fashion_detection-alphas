import React from "react";
import styled from "styled-components";

function Pin(props) {
  let { urls } = props;
  console.log(urls);
  return (
    <Wrapper>
      <Container>
        <img src={urls} alt="pin" />
        {console.log("why")}
      </Container>
    </Wrapper>
  );
}

export default Pin;

const Wrapper = styled.div`
  display: inline-flex;
  padding: 8px;
`;

const Container = styled.div`
  diplay: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 236px;

  img {
    display: flex;
    width: 100%;
    cursor: zoom-in;
    border-radius: 16px;
  }
`;
