/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';

import Weather from 'containers/Weather/Loadable';

export default function HomePage() {
  return (
    <>
      <h1>Weather:</h1> <Weather />
    </>
  );
}
