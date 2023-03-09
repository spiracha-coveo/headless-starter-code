import {
    SearchBox as HeadlessSearchBox,
    InstantResults as HeadlessInstantResults,
  } from '@coveo/headless';
  import {useEffect, useState, FunctionComponent} from 'react';
   
  interface InstantResultsProps {
    controllerSearchbox: HeadlessSearchBox;
    controllerInstantResults: HeadlessInstantResults;
  }
   
  export const InstantResults: React.FC<InstantResultsProps> = (
    props
  ) => {
    const {controllerSearchbox, controllerInstantResults} = props;
    const isEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) =>
      e.key === 'Enter';
    const [searchboxState, setStateSearchbox] = useState(
      controllerSearchbox.state
    );
    const [instantResultsState, setStateInstantResults] = useState(
      controllerInstantResults.state
    );
   
    useEffect(
      () =>
        controllerSearchbox.subscribe(() =>
          setStateSearchbox(controllerSearchbox.state)
        ),
      []
    );
    useEffect(
      () =>
        controllerInstantResults.subscribe(() =>
          setStateInstantResults(controllerInstantResults.state)
        ),
      []
    );
   
    return (
      
      <div className="search-box">
        <input
          value={searchboxState.value}
          onChange={(e) => controllerSearchbox.updateText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              controllerSearchbox.submit();
            } else if (e.key === 'Escape') {
              controllerSearchbox.clear();
              (e.target as HTMLInputElement).blur();
            }
          }}
        />
        <div className='search-results'>
        {searchboxState.suggestions.length > 0 && (
          <div className='search-queries'>
            {searchboxState.suggestions.map((suggestion) => {
              return (
                <p
                  key={suggestion.rawValue}
                  onMouseEnter={() => controllerInstantResults.updateQuery(suggestion.rawValue)}
                  onClick={() => controllerSearchbox.selectSuggestion(suggestion.rawValue)}
                  dangerouslySetInnerHTML={{__html: suggestion.highlightedValue}}
                ></p>
              );
            })}
          </div>
        )}
        {instantResultsState.results.length > 0 && (
          <div className='search-instant-results'>
            {instantResultsState.results.map((result) => {
            return (
              <p>
                <div>
                  {result.title}: {result.raw.source}
                </div>
                <pre>{result.excerpt}</pre>
              </p>
            );
          })}
          </div>
        )}        
        </div>
      </div>
    
    );
  };