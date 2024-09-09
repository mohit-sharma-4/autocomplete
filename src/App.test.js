/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import App from './App';

jest.mock('./components/searchInput/SearchInput', () => () => {
  return <mock-searchinput data-testid='search-input' />;
});
jest.mock('./components/suggestions/Suggestions', () => () => {
  return <mock-suggestions data-testid='suggestions' />;
});
jest.mock('./components/summaryCard/SummaryCard', () => () => {
  return <mock-summarycard data-testid='summarycard' />;
});

const mockHandleChange = jest.fn();

describe('app', () => {
  it('should render autocomplete app on screen', () => {
    const component = render(<App />);
    const { getByTestId } = component;
    expect(getByTestId('autocomplete-page')).toBeDefined();
    expect(component).toMatchSnapshot();
  });

  it('should call onSearch when user types in input field', () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId('search-input');
    expect(input).toBeDefined();
    input.addEventListener('change', mockHandleChange);
    expect(mockHandleChange).toHaveBeenCalledTimes(0);

    input.dispatchEvent(new Event('change', { bubbles: true }));
    expect(mockHandleChange).toHaveBeenCalledTimes(1);
  });
});
