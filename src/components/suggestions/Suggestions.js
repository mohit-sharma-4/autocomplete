import { useState } from 'react';
import './style.scss';

const Suggestions = ({ data, setDisplayData, setFilteredData }) => {
  const [scrolledToEnd, setScrolledToEnd] = useState(false);
  const handleSuggestionClick = (item) => {
    setDisplayData((prevData) => [...prevData, item]);
    setFilteredData([]);
  };

  const handleScrolledToEnd = (e) => {
    const target = e.target;
    if (target?.scrollHeight - target?.scrollTop === target?.clientHeight) {
      setScrolledToEnd(true);
    }
  };

  return (
    <div className='container' data-testid='suggestions-container'>
      <div
        className='suggestions'
        onScroll={handleScrolledToEnd}
        data-testid='scroll-box'
      >
        <ul>
          {data.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => handleSuggestionClick(item)}
                data-testid={`${item.id}-list-item`}
              >
                <span className='item'>
                  {item.summary.split(' ').splice(0, 15).join(' ')}...
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      {!scrolledToEnd && data.length > 5 && (
        <p data-testid='scroll-text'>scroll down for more results</p>
      )}
    </div>
  );
};

export default Suggestions;
