/* eslint-disable testing-library/prefer-screen-queries */
import Suggestions from './Suggestions';
import { render, fireEvent } from '@testing-library/react';

const mockSetDisplayData = jest.fn();
const mockSetFilteredData = jest.fn();

const data = [
  { id: 1, summary: 'test summary 1' },
  { id: 2, summary: 'test summary 2' },
  { id: 3, summary: 'test summary 3' },
  { id: 4, summary: 'test summary 4' },
  { id: 5, summary: 'test summary 5' },
  { id: 6, summary: 'test summary 6' }
];

describe('Suggestions', () => {
  it('should show suggestions when data is available', () => {
    const { getByTestId } = render(
      <Suggestions
        data={data}
        setDisplayData={mockSetDisplayData}
        setFilteredData={mockSetFilteredData}
      />
    );
    expect(getByTestId('suggestions-container')).toBeDefined();
  });

  it('should show suggestions list when data is available', () => {
    const { getByTestId } = render(
      <Suggestions
        data={data}
        setDisplayData={mockSetDisplayData}
        setFilteredData={mockSetFilteredData}
      />
    );
    expect(getByTestId('1-list-item')).toBeDefined();
  });

  it('should not show suggestions list when data is not available', () => {
    const { queryByTestId } = render(
      <Suggestions
        data={[]}
        setDisplayData={mockSetDisplayData}
        setFilteredData={mockSetFilteredData}
      />
    );
    expect(queryByTestId('1-list-item')).toBe(null);
  });

  it('should show scroll for more results text when user is not at the end of the list and has more than 5 items', () => {
    const { getByTestId } = render(
      <Suggestions
        data={data}
        setDisplayData={mockSetDisplayData}
        setFilteredData={mockSetFilteredData}
      />
    );
    expect(getByTestId('scroll-text')).toBeDefined();
  });

  it('should not show scroll for more results text when user at the end of the list', () => {
    const { getByTestId, queryByTestId } = render(
      <Suggestions
        data={data}
        setDisplayData={mockSetDisplayData}
        setFilteredData={mockSetFilteredData}
      />
    );

    fireEvent.scroll(getByTestId('scroll-box'), { target: { scrollX: 100 } });
    expect(queryByTestId('scroll-text')).toBe(null);
  });

  it('should not show scroll for more results text when there are less than 5 items in data', () => {
    const { queryByTestId } = render(
      <Suggestions
        data={[{ id: 1, summary: 'test' }]}
        setDisplayData={mockSetDisplayData}
        setFilteredData={mockSetFilteredData}
      />
    );

    expect(queryByTestId('scroll-text')).toBe(null);
  });

  it('should call setDisplayData and setFilteredData when an item is clicked', () => {
    const { getByTestId } = render(
      <Suggestions
        data={data}
        setDisplayData={mockSetDisplayData}
        setFilteredData={mockSetFilteredData}
      />
    );
    fireEvent.click(getByTestId('1-list-item'));
    expect(mockSetDisplayData).toHaveBeenCalledTimes(1, [
      { id: 1, summary: 'test summary' }
    ]);
    expect(mockSetFilteredData).toHaveBeenCalledTimes(1, []);
  });
});
