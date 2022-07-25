import styled from "styled-components";

export const NewItemWrapper = styled.div`
  border: 1px solid #b7b095;
  padding: 10px;

  .inputContainer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    label {
      font-family: initial;
      font-weight: initial;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      /* margin: 0; */
    }

    > input,
    select {
      border: none;
      margin: 10px 15px 0 0;
      font-size: 15px;
      padding: 10px;
      margin-bottom: 10px;
    }
    > input:focus {
      outline: none;
    }
  }
`;

export const AddBtnContainer = styled.div`
  margin-top: 10px;
`;
