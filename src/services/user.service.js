import Axios from 'axios';
import https from 'https'; 
const RESOURCE_NAME = 'https://localhost:44312/api/Tests';
Axios.create({
  baseURL: 'https://localhost:44312',
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export default {
  getAll() {
    return Axios.get('/api/Tests');
  },
 
  get(id) {
    return Axios.get(`/api/test/${id}`);
  },
 
  create(data) {
    return Axios.post(RESOURCE_NAME, data);
  },
 
  update(id, data) {
    return Axios.put(`${RESOURCE_NAME}/${id}`, data);
  },
 
  delete(id) {
    return Axios.delete(`${RESOURCE_NAME}/${id}`);
  }
};