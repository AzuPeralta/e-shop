import styled from "styled-components/macro";

export const ProductContainer = styled.div`
  background-color: white;
  width: 20%;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border-color: 1px solid black;
`;

export const ProductImage = styled.img`
  border-radius: 30px;
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
`;

export const ProductFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 20px;
`;

export const Description = styled.p`
  font-weight: 300;
  font-size: 16px;
`;

export const Price = styled.p`
  font-weight: 500;
  font-size: 16px;
`;

export const AddToCartButton = styled.button`
  background: transparent;
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  height: 35px;
  width: 35px;
`;
