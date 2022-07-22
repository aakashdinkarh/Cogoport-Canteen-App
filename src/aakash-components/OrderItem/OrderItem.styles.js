import styled from "styled-components";

export const Wrapper = styled.div`
  width: 45%;
  box-shadow: 1px 1px 3px rgb(0 0 0 / 20%);
  margin: 10px 0;
  padding: 10px;

  .user-details {
    display: flex;
    justify-content: space-between;
  }
  .order-items {
    padding: 10px;

    div:last-of-type {
      text-align: right;
    }
  }
  .order-item-details {
    display: flex;
    justify-content: space-between;
    margin: 2px;

    div span {
      margin-left: 5px;
    }
  }

  .order-buttons {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

export const ReadyBtn = styled.button`
  background-color: #b7b095;
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;

  :active {
    background-color: #938f80;
  }
`;

export const IconImg = styled.img`
  height: 10px;
  width: 10px;
  margin: 0 3px;
`;
