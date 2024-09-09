/* eslint-disable testing-library/prefer-screen-queries */
import SearchInput from './SearchInput';
import { render, fireEvent } from '@testing-library/react';

const mockOnChange = jest.fn();

describe('SearchInput', () => {
  it('should render search input on screen', () => {
    const { getByTestId } = render(
      <SearchInput inputVal='' onChange={mockOnChange} />
    );
    expect(getByTestId('search-input')).toBeDefined();
  });

  it('should call onChange when text is entered', () => {
    const { getByTestId } = render(
      <SearchInput inputVal='text' onChange={mockOnChange} />
    );
    expect(getByTestId('search-input')).toBeDefined();
    fireEvent.change(getByTestId('search-input'), {
      target: { value: 'text' }
    });
  });
});
