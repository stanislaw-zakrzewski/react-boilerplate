import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectWeatherDomain = state => state.weather || initialState;

const makeSelectError = () =>
  createSelector(
    selectWeatherDomain,
    substate => substate.error,
  );

const makeSelectLoading = () =>
  createSelector(
    selectWeatherDomain,
    substate => substate.loading,
  );

const makeSelectWeather = () =>
  createSelector(
    selectWeatherDomain,
    substate => substate.weather,
  );

export { makeSelectError, makeSelectLoading, makeSelectWeather };
