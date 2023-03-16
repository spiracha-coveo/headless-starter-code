import { useEffect } from 'react';
import './App.css';
import ResultList from './components/ResultList';
import SearchBox from './components/SearchBox';
import Facet from './components/Facet';
import Pager from './components/Pager'
import Sort from './components/Sort'
import { InstantResults } from './components/InstantResults';
import { 
  searchBox as SearchBoxController,
  resultList as ResultListController,
  categoryFacet as CategoryFacetController,
  colorFacet as ColorFacetController,
  levelFacet as LevelFacetController,
  pager as PagerController,
  instantResults as InstantResultsController,
  sort as SortController,
  criteria,
   } from './controllers/controllers';
import { resultTemplatesManager } from './controllers/resultTemplatesManager';
import { headlessEngine } from './Engine';

declare global {
  function coveoua(action?: string, fieldName?: any, fieldValue?: any): any;
}

function App() {

  useEffect(()=> headlessEngine.executeFirstSearch()) // show results on initial page load

  return (
    <div className="app">
      <header className="app-header">
        <img src={require('./assets/barca.svg').default} alt='barcaLogo' />
        <div className="search-section">
          {/* <SearchBox controller={SearchBoxController}/> */}
          <InstantResults controllerSearchbox={SearchBoxController} controllerInstantResults={InstantResultsController} />
        </div>
      </header>
      <div className="app-body">
        <div className="main-section">
          <div className="facet-section column">
            <Facet controller={CategoryFacetController} title="Category" />
            <Facet controller={ColorFacetController} title="Color" />
            <Facet controller={LevelFacetController} title="Level" />
          </div>
          <div className="results-section column">
            <Sort controller={SortController} criteria={criteria} />
            <ResultList controller={ResultListController} resultTemplatesManager={resultTemplatesManager}/>
            <Pager controller={PagerController}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
