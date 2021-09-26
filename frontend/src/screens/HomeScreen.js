import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
// import products from "../Config/json/products";
import Product from "../components/Product";
import axios from "axios";
const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useState(() => {
    const fetchProducts = async () => {
      await axios
        .get("/products")
        .then((res) => setProducts(res.data))
        .catch((err) => console.log("err", err));
    };
    fetchProducts();
  }, []);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product, index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
