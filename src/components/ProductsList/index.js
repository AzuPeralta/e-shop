import React from "react";
import styled from "styled-components/macro";
import Product from "../Products";

const ProductsListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const ProductsList = () => {
  return (
    <ProductsListContainer>
      <Product
        imageUrl={"https://placekitten.com/300/300"}
        title="Title"
        description="This is a description"
        price={16}
      />

      <Product
        imageUrl={"https://placekitten.com/g/300/300"}
        title="Otro Producto"
        description="This is a description"
        price={20}
      />
      <Product
        imageUrl={"https://placekitten.com/g/300/300"}
        title="Un Producto mas"
        description="This is a description"
        price={10}
      />
    </ProductsListContainer>
  );
};

export default ProductsList;
