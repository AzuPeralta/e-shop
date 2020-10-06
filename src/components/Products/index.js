import React from "react";
import {
  ProductContainer,
  ProductImage,
  ProductFooter,
  Title,
  Description,
  Price,
  AddToCartButton,
} from "./styles/productStyles";

const Product = ({ imageUrl, title, description, price }) => {
  return (
    <ProductContainer>
      <ProductImage src={imageUrl} />

      <Title>{title}</Title>
      <Description>{description}</Description>
      <ProductFooter>
        <Price>{price}</Price>
        <AddToCartButton>+</AddToCartButton>
      </ProductFooter>
    </ProductContainer>
  );
};

export default Product;
