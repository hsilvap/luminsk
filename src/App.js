import React from "react";
import "./App.css";
import AllProducts from "./components/AllProducts";
import Header from "./components/Header";
import { useQuery, gql } from "@apollo/client";

const ALL_PRODUCTS = gql`
  query {
    products {
      id
      price(currency: USD)
      image_url
      title
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(ALL_PRODUCTS);
  return (
    <>
      <Header />
      <AllProducts loading={loading} error={error} data={data} />
    </>
  );
}

export default App;
