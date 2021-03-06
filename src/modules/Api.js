import axios from 'axios';
import qs from 'qs';
import SessionStorage from './SessionStorage';

const API = 'http://www.lib.local/api';

class Api {
  configs = {};
  defaultConfigs = {};

  constructor() {
    const token = SessionStorage.get('token');
    let headers = {};

    // if (token) {
    //   headers['Authorization'] = 'Bearer ' + token;
    // }

    this.defaultConfigs = {
      headers,
      params: {},
      crossDomain: true,
    };

    this.resetConfigs();
  }

  getRuntimeConfigs() {
    const token = SessionStorage.get('token');
    let headers = {};
    //
    // if (token) {
    //   headers['Authorization'] = 'Bearer ' + token;
    // }

    return { ...this.configs, ...headers };
  }

  resetConfigs() {
    this.configs = Object.assign({}, this.defaultConfigs);
  }

  setConfig(key, value) {
    this.configs = Object.assign({}, this.configs, {
      [key]: value,
    });
  }

  mergeConfigs(params, headers, configs) {
    const runtimeConfigs = this.getRuntimeConfigs();
    return Object.assign(
      {},
      runtimeConfigs,
      Object.assign({}, configs, {
        params: Object.assign({}, runtimeConfigs.params, params),
        headers: Object.assign({}, runtimeConfigs.headers, headers),
        paramsSerializer: function(params) {
          return qs.stringify(params, { arrayFormat: 'brackets' });
        },
      }),
    );
  }

  static cancelToken() {
    const CancelToken = axios.CancelToken;
    return CancelToken.source();
  }

  get(uri, params = {}, headers = {}, configs = {}) {
    return axios
      .get(`${API}/${uri}`, this.mergeConfigs(params, headers, configs))
      .then((response) => response.data);
  }

  post(uri, data, params = {}, headers = {}, configs = {}) {
    return axios
      .post(`${API}/${uri}`, data, this.mergeConfigs(params, headers, configs))
      .then((response) => response.data);
  }

  put(uri, data, params = {}, headers = {}, configs = {}) {
    return axios
      .put(`${API}/${uri}`, data, this.mergeConfigs(params, headers, configs))
      .then((response) => response.data);
  }

  delete(uri, params = {}, headers = {}, configs = {}) {
    return axios
      .delete(`${API}/${uri}`, this.mergeConfigs(params, headers, configs))
      .then((response) => response.data);
  }

  upload(uri, file, data, params = {}, headers = {}, configs = {}) {
    let formData = new FormData();
    formData.append('file', file);

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
      }
    }

    return this.post(uri, formData, params, headers, configs);
  }
}

export default new Api();
