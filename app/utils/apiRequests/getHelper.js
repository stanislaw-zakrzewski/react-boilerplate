import api from 'utils/apiRequest';
import { checkStatus } from 'utils/requestHelper';

const getHelper = (url, body) => api.get(url, body).then(checkStatus);

export default getHelper;
