/* eslint-disable react/prop-types */
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./productModal.css";

const ProductModal = ({ showModal, product, onEdit, onCloseModal }) => {
  const [productDetails, setProductDetails] = useState(product);
  const onChange = (e, type) => {
    setProductDetails({ ...productDetails, [type]: e.target.value });
  }

  const productEdit = (productDetails) => {
    onEdit(productDetails);
    onCloseModal();
  }
  return (
    <div>
      <Modal show={showModal} onHide={onCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="product-modal-image-container">
            <img
              className="product-modal-image"
              src={productDetails.image}
              alt={productDetails.title}
            />
          </div>
          <div className="product-modal-inputs">
            <div className="modal-group">
              <label>Image Url:</label>
              <input type="text" defaultValue={productDetails.image} onChange={(e) => onChange(e, 'iamge')} />
            </div>
            <div className="modal-group">
              <label>Title:</label>
              <input type="text" defaultValue={productDetails.title} onChange={(e) => onChange(e, 'title')}/>
            </div>
            <div className="modal-group">
              <label>Price:</label>
              <input type="text" defaultValue={productDetails.price} onChange={(e) => onChange(e, 'price')}/>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => productEdit(productDetails)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductModal;
