import React from "react";
import products from "../Config/json/products";
import { Link } from "react-router-dom";
import { Row, Col, Image, Card } from "react-bootstrap";
import SimpleRating from "../components/Rating";
const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);
  return (
    <>
      <Link to="/">
        <button type="button" className="btn btn-dark">
          Go Back
        </button>
      </Link>
      <Row>
        <Col md={6} className="my-3">
          <Image src={product.image} rounded fluid />
        </Col>
        <Col md={3}>
          <h4 className="my-3">{product.name}</h4>
          <SimpleRating value={product.rating} text={`${product.numReviews}`} className={`my-4`} />
          <span style={{ fontSize: "18px", fontWeight: "600", color: "#5d9686" }}>
            Description : {product.description}
          </span>
        </Col>
        <Col>
          <Card className="p-3 my-3">
            <Row className="mb-3">
              <Col>Price:</Col>
              <Col>
                <strong>₹ {product.price}</strong>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>Status</Col>
              <Col>{product.countInStock > 0 ? "In-Stock" : "Out of stock"}</Col>
            </Row>
            <button type="button" className="btn btn-dark">
              Check-out
            </button>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
