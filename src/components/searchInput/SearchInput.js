import './style.scss';

const SearchInput = ({ inputVal, onChange }) => {
  return (
    <div className='input-container'>
      <input
        data-testid='search-input'
        className='search-input'
        type='text'
        value={inputVal}
        onChange={onChange}
        placeholder='search'
      />
    </div>
  );
};

export default SearchInput;
