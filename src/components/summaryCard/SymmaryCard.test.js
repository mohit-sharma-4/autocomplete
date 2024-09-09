/* eslint-disable testing-library/prefer-screen-queries */
import SummaryCard from './SummaryCard';
import { render } from '@testing-library/react';

describe('SummaryCard', () => {
  it('should render summary card', () => {
    const { getByTestId } = render(
      <SummaryCard
        title='Profit First'
        author='Derek Sivers'
        summary='The Book in Three Sentences: Too many people spend their life pursuing things that don’t actually make them happy.'
      />
    );
    expect(getByTestId('summary-card')).toBeDefined();
  });

  it('should render title summary and author as the props card', () => {
    const { getByTestId } = render(
      <SummaryCard
        title='Profit First'
        author='Derek Sivers'
        summary='The Book in Three Sentences: Too many people spend their life pursuing things that don’t actually make them happy.'
      />
    );
    expect(getByTestId('summary-card')).toBeDefined();
    expect(getByTestId('title')).toHaveTextContent('Profit First');
    expect(getByTestId('author')).toHaveTextContent('Derek Sivers');
    expect(getByTestId('summary')).toHaveTextContent(
      'The Book in Three Sentences: Too many people spend their life pursuing things that don’t actually make them happy.'
    );
  });
});
