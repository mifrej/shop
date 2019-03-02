import React from 'react';
import ReactDOM from 'react-dom';
import ErrorMessage from './ErrorMessage';

describe('<ErrorMessage />', () => {
  it('should render without crash', () => {
    const rootElement = document.createElement('div');
    ReactDOM.render(<ErrorMessage message="Error message" />, rootElement);
  });
});
