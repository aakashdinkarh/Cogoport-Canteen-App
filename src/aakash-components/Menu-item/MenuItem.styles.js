import styled from "styled-components";

export const ItemContainer = styled.div`
  position: relative;
  width: 40%;
  background: transparent;
  display: flex;
  margin: 10px 0;
  padding: 10px;
  box-shadow: 1px 1px 3px rgb(0 0 0 / 20%);

  .closeBtn {
    height: 15px;
    width: 15px;
    right: -9px;
    top: -22px;
    text-shadow: 0 0 4px rgb(0 0 0 / 50%);
    font-size: 30px;
    position: absolute;
    cursor: pointer;
  }

  div:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    width: calc(100% - 120px);
    padding-left: 15px;
  }

  .item-image-container {
    width: 120px;
    .itemImage {
      max-width: 100%;
      height: 100%;
      max-height: 100%;
    }
  }
  .item-details {
    width: 100%;
    position: relative;
    padding-right: 30px;

    .item-cost {
      position: absolute;
      top: 0;
      right: 0;
    }
    .availableCheck {
      position: absolute;
      right: 0;
      bottom: 0;
      accent-color: #b7b095;
    }
    .item-name {
      position: relative;
    }
    .item-name::after {
      position: absolute;
      bottom: -5px;
      left: 0;
      content: "";
      display: inline-block;
      width: 50px;
      height: 1px;
      background-color: black;
      box-shadow: 0 0 2px black;
    }
  }

  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;
