import React from "react";
import styled from "styled-components";

export default function Friend({ bold, info, action }) {
  return (
    <StyledFriend bold={bold} danger={info.name === "Josh"}>
      {info.name}
      <button onClick={() => action(info.id)}>See details</button>
    </StyledFriend>
  );
}

const StyledFriend = styled.div`
  color: ${(pr) => (pr.danger ? pr.theme.danger : pr.theme.primaryColor)};
  font-weight: ${(pr) => (pr.bold ? "bold" : "initial")};
  width: 60%;
  display: flex;
  justify-content: space-between;

  button {
    color: ${(pr) => pr.theme.tertiaryColor};
    &:hover {
      transform: scale(1.1);
      transition: transform 0.5s ease-in-out;
    }
    transition: transform 0.5s ease-in-out;
  }

  @media (max-width: 550px) {
    width: 100%auto;
  }

  &:hover {
    color: ${(pr) => pr.theme.secondaryColor};
    background-color: cyan;
    transition: all 0.3s ease-in-out;
  }
  transition: all 0.3s ease-in-out;
`;

// const Button = styled.button`
//   color: pink;
// `;
