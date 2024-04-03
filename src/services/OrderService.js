import api from '../api/config';

class OrderService {
  static instance = new OrderService();

  getOrders() {
    return api.get('/order');
  }

  setOrder(body) {
    return api.post('/order', body);
  }
}

export default OrderService.instance;
