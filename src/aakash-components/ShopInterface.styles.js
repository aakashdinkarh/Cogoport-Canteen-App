import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: url(https://giardino.axiomthemes.com/wp-content/uploads/2017/12/sidebar-bg_pattern.png?id=509);
  height: 100vh;
  overflow: auto;
  font-size: 20px;
  font-weight: 600;
  padding: 10px;
`;

export const MenuContainer = styled.div`
  .mealItems {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 10px 0 10px 0;
  }
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
