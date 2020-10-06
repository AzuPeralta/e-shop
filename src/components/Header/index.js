import React from "react";
import {
  HeaderContainer,
  Logo,
  SearchBar,
  ShoppingCardButton,
  ShoppingCartBag,
} from "./styles/headerStyles";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>El Brujo Store</Logo>
      <SearchBar placeholder="Search" />
      <ShoppingCardButton>
        <ShoppingCartBag src={"images/shoppingCartBag.svg"} />
      </ShoppingCardButton>
    </HeaderContainer>
  );
};

export default Header;
