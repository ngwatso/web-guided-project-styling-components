import React from 'react'
import styled from 'styled-components'

const StyledFriend = styled.div`

  width: 60%;
  display: flex;
  justify-content: space-between;

  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.white};

  @media ${props => props.theme.breakpointMobile} {
    width: initial;
  }

    transition: all 0.4s ease-in-out;
  &:hover {
    transition: all 0.4s ease-in-out;
    background-color: ${props => props.theme.secondaryColor};
  }

  &::before {
    content: "${props => props.besty ? "💚" : "😊"}";
  }

  button {
    background-color: ${props => props.theme.tertiaryColor};
    &:hover {
      transform: scale(1.1);
    }
  }
`

export default function Friend({ info, action, besty}) {
  return (
    <StyledFriend besty={besty}>
      {info.name}
      <button onClick={() => action(info.id)}>
        See details
      </button>
    </StyledFriend>
  )
}
