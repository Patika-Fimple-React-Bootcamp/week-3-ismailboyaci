/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./productCard.css";
import ProductModal from "./ProductModal";

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleDelete = () => {
    const { product, onDelete } = this.props;
    onDelete(product.id);
  };

  handleEdit = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { product, onEdit } = this.props;
    const { showModal } = this.state;

    return (
      <div className="product-card">
        <img className="product-image" src={product.image} alt={product.title} />
        <p className="product-title">{product.title}</p>
        <p className="product-price">{`$${parseFloat(product.price).toFixed(2)}`}</p>
        <div className="product-actions">
          <Button variant="danger" size="sm" onClick={this.handleDelete}>Delete</Button>
          <Button variant="primary" size="sm" onClick={this.handleEdit}>Edit</Button>
        </div>
        <ProductModal showModal={showModal} product={product} onEdit={onEdit} onCloseModal={this.handleCloseModal} />
      </div>
    );
  }
}

export default ProductCard;
