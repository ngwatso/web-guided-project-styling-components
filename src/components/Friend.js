import React from "react";
import styled from "styled-components";

export default function Friend({ info, action }) {
  return (
    <StyledFriend>
      {info.name}
      <button onClick={() => action(info.id)}>See details</button>
    </StyledFriend>
  );
}

const StyledFriend = styled.div`
  color: ${};
  font-weight: bold;
  width: 60%;
  display: flex;
  justify-content: space-between;

  button {
    color: grey;
  }

  @media (max-width: 550px) {
    width: 100%auto;
  }

  &:hover {
    color: green;
  }
`;

// const Button = styled.button`
//   color: pink;
// `;
