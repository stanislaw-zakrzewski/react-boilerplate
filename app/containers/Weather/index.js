/**
 *
 * Weather
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { fetchWeather } from './actions';
import {
  makeSelectError,
  makeSelectLoading,
  makeSelectWeather,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

export const Weather = ({ error, getWeather, loading, weather }) => {
  useInjectReducer({ key: 'weather', reducer });
  useInjectSaga({ key: 'weather', saga });

  useEffect(() => {
    getWeather();
  }, []);

  let content;
  if (loading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>error</p>;
  } else if (weather) {
    content = (
      <div>
        <p>Rain: {weather.rain}</p>
        <br />
        <p>Temperature: {weather.temperature}</p>
      </div>
    );
  }

  return <div>{content}</div>;
};

Weather.propTypes = {
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  getWeather: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  weather: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
  loading: makeSelectLoading(),
  weather: makeSelectWeather(),
});

const mapDispatchToProps = {
  getWeather: fetchWeather,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Weather);
