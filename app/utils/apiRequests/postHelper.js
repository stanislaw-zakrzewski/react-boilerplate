import api from 'utils/apiRequest';
import { checkStatus } from 'utils/requestHelper';

const postHelper = (url, body) => api.post(url, body).then(checkStatus);

export default postHelper;
