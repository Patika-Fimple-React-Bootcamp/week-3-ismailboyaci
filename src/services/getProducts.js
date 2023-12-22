// apiService.js

import axios from 'axios';

const getProducts = async () => {
  try {
    // Axios ile HTTP GET isteği gönder
    const response = await axios.get('https://fakestoreapi.com/products');

    // İstek başarılıysa verileri döndür
    return response.data;
  } catch (error) {
    // Hata durumunda hata mesajını logla
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default getProducts;
