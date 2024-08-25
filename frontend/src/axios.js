import axios from 'axios';
import cookies from 'js-cookie'

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common['Accept-Language'] = cookies.get('i18next') || 'en';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export default axios
