/*
 *
 * Weather reducer
 *
 */
import produce from 'immer';
import {
  FETCH_WEATHER,
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_SUCCESS,
} from './constants';

export const initialState = { error: false, loading: false, weather: false };

/* eslint-disable default-case, no-param-reassign */
const weatherReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_WEATHER:
        draft.loading = true;
        draft.error = false;
        break;
      case FETCH_WEATHER_ERROR:
        draft.loading = false;
        draft.error = action.payload.error;
        draft.weather = false;
        break;
      case FETCH_WEATHER_SUCCESS:
        draft.loading = false;
        // Tutaj mozna latwo wybrac co z requesta chcemy wybrac tylko niektore dane
        draft.weather = {
          rain: action.payload.weather.rain,
          temperature: action.payload.weather.temperature.avg,
        };
        break;
    }
  });

export default weatherReducer;
