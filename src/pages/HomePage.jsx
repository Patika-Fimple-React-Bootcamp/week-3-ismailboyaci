
import { useEffect, useState } from "react";
import getProducts from "../services/getProducts";
import ProductCard from "../components/ProductCard";
import "./homePage.css"; // CSS dosyasını içe aktar
import Toast from "../components/Toast";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (message) => {
    setToastMessage(message);
  };

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, []);

  const onDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    showToast('Product deleted successfully');
  }
  const onEdit = (product) => {
    setProducts(products.map((p) => p.id === product.id ? product : p));
    showToast('Product updated successfully');
  }
  return (
    <div className="homepage-container">
      <div className="product-list">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : error ? (
          <div className="error">{error.message}</div>
        ) : (
          <>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onDelete={onDelete}  onEdit={onEdit}/>
            ))}
          </>
        )}
      </div>
      <Toast message={toastMessage} />
    </div>
  );
};

export default HomePage;
