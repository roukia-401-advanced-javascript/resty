/* eslint-disable no-unused-vars */
import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Results from '../components/results/results';

import App from '../App';
let person = {

    'name': 'Luke Skywalker',
    'height': '172',
    'mass':'77',
    'hair_color':'blond',
    'skin_color':'fair',
    'eye_color':'blue',
    'birth_year':'19BBY'


};

const header = 'application/json';

test('should render results', () => {
    render(<Results count={82} headers={header} results={person} />);
    const results = screen.getByTestId('results');
    console.log("resultssssssssss", results)
    expect(results).toHaveTextContent('Luke Skywalker');
    expect(results).toHaveTextContent('height');
    expect(results).toHaveTextContent('mass');
    expect(results).toHaveTextContent('hair_color');
    expect(results).toHaveTextContent('skin_color');
    expect(results).toHaveTextContent('eye_color');
    expect(results).toHaveTextContent('birth_year');
});

describe('app', () => {

  it('home page / form ', async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('home'));
    const doc = screen.getAllByRole('button');
    expect(doc[0]).toHaveTextContent('Go!');
  
  });
  

  it('history router', async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('history'));
    const list = screen.getAllByRole('list');
    expect(list[0]).toHaveTextContent('History');
  });

  it('help router', async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('help'));
    const list = screen.getAllByRole('list');
    expect(list[0]).toHaveTextContent('Help');
  });

});