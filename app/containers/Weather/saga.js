import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchExapmleData } from 'utils/apiRequests';

import { FETCH_WEATHER } from './constants';
import { fetchWeatherError, fetchWeatherSuccess } from './actions';

export function* fetchWeatherSaga() {
  try {
    const response = yield call(fetchExapmleData);
    yield put(fetchWeatherSuccess(response.data));
  } catch (error) {
    yield put(fetchWeatherError(error.response));
  }
}

export default function* weatherSaga() {
  yield takeLatest(FETCH_WEATHER, fetchWeatherSaga);
}
