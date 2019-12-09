import api from 'utils/apiRequest';
import { checkStatus } from 'utils/requestHelper';

const deleteHelper = (url, body = {}) =>
  api.delete(url, body, {}).then(checkStatus);

export default deleteHelper;
