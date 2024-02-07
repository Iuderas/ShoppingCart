import React from "react";
import {
  CartImg,
  HeaderContainer,
  HeaderLogo,
  HeaderTitle,
  LogoImg,
} from "./styles";

import logo from "../../images/pngwing.com.png";
import cart from "../../images/Cart.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <LogoImg src={logo} />
        <HeaderTitle>Shopping Cart</HeaderTitle>
      </HeaderLogo>

      <CartImg src={cart}></CartImg>
    </HeaderContainer>
  );
};
