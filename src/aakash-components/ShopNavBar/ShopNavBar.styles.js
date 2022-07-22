import styled from "styled-components";

export const Wrapper = styled.div``;

export const SwitchTab = styled.div`
  display: inline-block;
  padding: 10px;
  user-select: none;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  color: ${({ tabValue }) => (tabValue ? "black" : "#888473")};

  ::after {
    transition: all 0.3s;
    content: "";
    position: absolute;
    display: inline-block;
    width: ${({ tabValue }) => (tabValue ? "100%" : "0px")};
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: black;
  }
  :hover {
    color: black;
    ::after {
      width: 100%;
    }
  }
`;
