import React from "react";

import { LogoSearchToolsContainer } from "../../containers/LogoSearchToolsContainer/LogoSearchToolsContainer";
import { ShoppingCartContainer } from "../../containers/ShoppingCartContainer/ShoppingCartContainer";

export const ShoppingCartPage = ({ cartItems }) => {
  return (
    <div className="shopping-cart-page">
      <LogoSearchToolsContainer></LogoSearchToolsContainer>
      <ShoppingCartContainer cartItems={cartItems}></ShoppingCartContainer>
    </div>
  );
};
