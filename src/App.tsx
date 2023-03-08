import { useEffect } from 'react';
import './App.css';
import ResultList from './components/ResultList';
import SearchBox from './components/SearchBox';
import Facet from './components/Facet';
import Pager from './components/Pager'
import { InstantResults } from './components/InstantResults';
import { 
  searchBox as SearchBoxController,
  resultList as ResultListController,
  facet as FacetController,
  pager as PagerController,
  instantResults as InstantResultsController
   } from './controllers/controllers';
import { resultTemplatesManager } from './controllers/resultTemplatesManager';
import { headlessEngine } from './Engine';
function App() {

  useEffect(()=> headlessEngine.executeFirstSearch()) // show results on initial page load

  return (
    <div className="app">
      <header className="app-header">
        <img src={require('./assets/barca.svg').default} alt='barcaLogo' />
        <div className="search-section">
          <SearchBox controller={SearchBoxController}/>
          {/* <InstantResults controllerSearchbox={SearchBoxController} controllerInstantResults={InstantResultsController}  />; */}
        </div>
      </header>
      <div className="app-body">
        <div className="main-section">
          <div className="facet-section column">
            <Facet controller={FacetController} title="Category" />
          </div>
          <div className="results-section column">
            <ResultList controller={ResultListController} resultTemplatesManager={resultTemplatesManager}/>
            <Pager controller={PagerController}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
