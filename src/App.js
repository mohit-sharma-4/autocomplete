import { useState } from 'react';
import SearchInput from './components/searchInput/SearchInput';
import Suggestions from './components/suggestions/Suggestions';
import SummaryCard from './components/summaryCard/SummaryCard';
import { countWordOccurances, debounce } from './utils/helpers';
import Data from './services/Data.json';

import './App.scss';

const App = () => {
  const [inputVal, setInputVal] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  const onSearch = debounce((searchWord) => {
    const filteredSummaries = Data.summaries.filter((value) =>
      value.summary.toLowerCase().includes(searchWord.toLowerCase())
    );

    const sortedData = sortData(filteredSummaries, searchWord);

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(sortedData);
    }
  }, 500);

  const handleInputChange = (e) => {
    const searchWord = e.target.value;
    setInputVal(searchWord);
    onSearch(searchWord);
  };

  const sortData = (input, word) => {
    const updatedSummaries = input.map((el) => {
      return {
        id: el.id,
        summary: el.summary,
        count: countWordOccurances(el.summary, word)
      };
    });

    return updatedSummaries.sort((a, b) => b.count - a.count);
  };

  return (
    <div className='App' data-testid='autocomplete-page'>
      <header className='app-header'>
        <h2>Autocomplete</h2>
      </header>
      <main className='app-content'>
        <div className='autocomplete-container'>
          <SearchInput
            inputVal={inputVal}
            setInputVal={setInputVal}
            onChange={handleInputChange}
          />
          {filteredData.length > 0 && (
            <Suggestions
              data={filteredData}
              setDisplayData={setDisplayData}
              setFilteredData={setFilteredData}
            />
          )}
        </div>
        <div className='card-layout-container'>
          {displayData.length > 0 &&
            displayData.map((card) => {
              const title = Data.titles[card.id];
              const author = Data.authors[card.id].author;
              const summary = card.summary;
              return (
                <SummaryCard
                  key={card.id}
                  title={title}
                  author={author}
                  summary={summary}
                />
              );
            })}
        </div>
      </main>
    </div>
  );
};

export default App;
