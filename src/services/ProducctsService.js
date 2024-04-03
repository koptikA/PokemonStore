import api from '../api/config';

class ProducctsService {
  static instance = new ProducctsService();

  getProducts({ page }) {
    return api.get('/products', { params: { page, limit: 24 } });
  }

  getProductById(productId) {
    return api.get(`/products/${productId}`);
  }
}

export default ProducctsService.instance;
