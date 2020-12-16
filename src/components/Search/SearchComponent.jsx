import React from 'react';
import styled from "styled-components";

const SearchStyled = styled.div`
  display: flex;
  margin: 32px 0;
`

const Input = styled.input`
  font-size: 24px;
  padding: 8px 0;
  border-bottom: 1px solid lightgray;
`

const SearchComponent = ({ onValueChange, placeholder }) => {
  let timeout = null;

  const handleOnKeyUp = (e) => {
    const value = e.target.value;
    clearTimeout(timeout);

    timeout = setTimeout(function () {
      onValueChange(value)
    }, 500);
  }

  return (
    <SearchStyled>
      <Input onKeyUp={handleOnKeyUp} placeholder={placeholder}/>
    </SearchStyled>
  );
}

export default SearchComponent;