import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Product from "../Product";

const AllProductsWrapper = styled.div`
  display: flex;
  flex-flow: column;
`;
const ProductInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  width: 100%;
  align-items: center;
`;
const ProductsWrapper = styled.div`
  display: grid;
  heigth: 100%;
  background-color: #e2e6e3;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProductInfoSectionWrapper = styled.div`
  display: flex;
  min-height: 250px;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  > h2 {
    margin-bottom: 0px;
  }
`;
const AllProducts = ({ loading, error, data }) => {
  console.log(data);
  return (
    <AllProductsWrapper>
      <ProductInfoWrapper>
        <ProductInfoSectionWrapper>
          <h2>All products</h2>
          <h5>A 360º look at Lumin</h5>
        </ProductInfoSectionWrapper>
        <ProductInfoSectionWrapper>
          <select defaultValue="0">
            <option value="0">Filter by</option>
          </select>
        </ProductInfoSectionWrapper>
      </ProductInfoWrapper>
      <ProductsWrapper>
        {data &&
          data.products.map((prod) => <Product key={prod.id} {...prod} />)}
      </ProductsWrapper>
    </AllProductsWrapper>
  );
};

export default AllProducts;

AllProducts.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.any.isRequired,
  data: PropTypes.any.isRequired,
};
