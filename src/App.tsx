import { useEffect } from 'react';
import './App.css';
import ResultList from './components/ResultList';
import SearchBox from './components/SearchBox';
import Facet from './components/Facet';
import { 
  searchBox as SearchBoxController,
  resultList as ResultListController,
  facet as FacetController
   } from './controllers/controllers';
import { headlessEngine } from './Engine';
function App() {

  useEffect(()=> headlessEngine.executeFirstSearch())

  return (
    <div className="App">
      <header className="App-header">
        <div className='App-title'>
          <img src={require('./barca.svg').default} alt='mySvgImage' />
        </div>
        <div className="search-section">
          <SearchBox controller={SearchBoxController}/>
        </div>
      </header>
      <div className="App-body">
        <div className="main-section">
          <div className="facet-section column">
            <Facet controller={FacetController} title="Category" />
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
