import api from '../api/config';
import { GET_CART_ENDPOINT, PRODUCT_CART_ENDPOINT } from '../constants/api';

class CartService {
  static instance = new CartService();

  getCart() {
    return api.get(GET_CART_ENDPOINT);
  }

  addProductToCart(product) {
    return api.post(PRODUCT_CART_ENDPOINT, product);
  }

  updateProductInCart(body) {
    return api.patch(PRODUCT_CART_ENDPOINT, body);
  }

  removeProductFromCart(productId) {
    return api.delete(`${PRODUCT_CART_ENDPOINT}/${productId}`);
  }
}

export default CartService.instance;
