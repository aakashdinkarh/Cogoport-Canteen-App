import styled from "styled-components";

export const NewItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  label {
    font-family: initial;
    font-weight: initial;
  }

  > input,
  select {
    border: none;
    margin: 10px 15px 0 0;
    font-size: 15px;
    padding: 10px;
    :focus {
      outline: none;
    }
  }
`;
