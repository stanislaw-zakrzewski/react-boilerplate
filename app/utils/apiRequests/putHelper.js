import api from 'utils/apiRequest';
import { checkStatus } from 'utils/requestHelper';

const putHelper = (url, body) => api.put(url, body).then(checkStatus);

export default putHelper;
