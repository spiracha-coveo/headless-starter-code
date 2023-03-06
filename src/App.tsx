import { useEffect } from 'react';
import './App.css';
import ResultList from './components/ResultList';
import SearchBox from './components/SearchBox';
import { 
  searchBox as SearchBoxController,
  resultList as ResultListController
   } from './controllers/controllers';
import { headlessEngine } from './Engine';

function App() {

  useEffect(()=> headlessEngine.executeFirstSearch())

  return (
    <div className="App">
      <header className="App-header">
        <h1>Coveo Headless Search Interface</h1>
      </header>
      <div className="App-body">
        <div className="search-section">
        <SearchBox controller={SearchBoxController}/>
        </div>
        <div className="main-section">
          <div className="facet-section column">
            <h1>Facets go here</h1>
          </div>
          <div className="results-section column">
            <ResultList controller={ResultListController}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
