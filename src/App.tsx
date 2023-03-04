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
      <h1>Hello World</h1>
      <SearchBox controller={SearchBoxController}/>
      <ResultList controller={ResultListController}/>
    </div>
  );
}

export default App;
