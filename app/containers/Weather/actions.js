/*
 *
 * Weather actions
 *
 */

import {
  FETCH_WEATHER,
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_SUCCESS,
} from './constants';

export const fetchWeather = () => ({
  type: FETCH_WEATHER,
});

export const fetchWeatherError = error => ({
  type: FETCH_WEATHER_ERROR,
  payload: { error },
});

export const fetchWeatherSuccess = weather => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: { weather },
});
