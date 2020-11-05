import React from "react";
import styled from "styled-components";

export default function Friend({ info, action }) {
  return (
    <StyledFriend >
      {info.name}
      <button onClick={() => action(info.id)}>See details</button>
    </StyledFriend>
  );
}

const StyledFriend = styled.div`
  color: ${(pr) => pr.theme.primaryColor};
  font-weight: bold;
  width: 60%;
  display: flex;
  justify-content: space-between;

  button {
    color: ${(pr) => pr.theme.tertiaryColor};
  }

  @media (max-width: 550px) {
    width: 100%auto;
  }

  &:hover {
    color: ${(pr) => pr.theme.secondaryColor};
  }
`;

// const Button = styled.button`
//   color: pink;
// `;
