import { SwitchTab, Wrapper } from "./ShopNavBar.styles";

const ShopNavBar = ({ navBarContent, setNavBarContent }) => {
  return (
    <Wrapper>
      <SwitchTab
        tabValue={navBarContent === "menu"}
        onClick={() => setNavBarContent("menu")}
      >
        Menu
      </SwitchTab>
      <SwitchTab
        tabValue={navBarContent === "orders"}
        onClick={() => setNavBarContent("orders")}
      >
        Orders
      </SwitchTab>
    </Wrapper>
  );
};

export default ShopNavBar;
