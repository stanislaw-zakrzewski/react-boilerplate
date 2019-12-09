// Tutaj znajduja sie wszystkie requesty

import urls from 'utils/urls';
import getHelper from './getHelper';

// Poprzez params mozemy przekazac dodatkowe dane do tworzenia requestu
export const fetchExapmleData = (params = {}) =>
  getHelper(urls.exampleUrl, {
    ...params,
  });
