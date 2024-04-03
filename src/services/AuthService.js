import api from '../api/config';

class AuthService {
  static instance = new AuthService();

  login({ email, password }) {
    return api.post('/auth/signIn', { email: email, password: password });
  }

  logUp(body) {
    return api.post('/auth/signUp', body);
  }
}

export default AuthService.instance;
