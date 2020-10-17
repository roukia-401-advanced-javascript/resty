import React from 'react'
import { render, waitFor, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Results from '../components/results/results';

let person = {

    'name': 'Luke Skywalker',
    'height': '172',

};

const header = 'application/json';

test('should render results', () => {
    render(<Results count={82} headers={header} results={person} />);
    const results = screen.getByTestId('results');
    console.log("resultssssssssss", results)
    expect(results).toHaveTextContent('Luke Skywalker');
    expect(results).toHaveTextContent('height');
});