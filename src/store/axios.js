import Axios from 'axios';
import https from 'https'; 
Axios.create({
  baseURL: 'https://localhost:44312',
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});
export default Axios;