import React from 'react'
import { useState, useEffect } from 'react';
import {SearchBox as SearchBoxController} from '@coveo/headless'


interface SearchBoxProps {
    controller: SearchBoxController
}

const SearchBox: React.FC<SearchBoxProps> = (props) => {
    const {controller} = props
    const [state, setState] = useState(controller.state);
    const [focused, setFocused] = useState(false);

    useEffect(
      () => controller.subscribe(() => setState(controller.state)),
      [controller]
    );
    return (
      
      <div className="search-box">
        <input
          value={state.value}
          onChange={(e) => controller.updateText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              controller.submit();
            } else if (e.key === 'Escape') {
              controller.clear();
              (e.target as HTMLInputElement).blur();
            }
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {focused && state.suggestions.length > 0 && (
          <div className='search-queries'>
            {state.suggestions.map((suggestion) => {
              return (
                <p
                  key={suggestion.rawValue}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => controller.selectSuggestion(suggestion.rawValue)}
                  dangerouslySetInnerHTML={{__html: suggestion.highlightedValue}}
                ></p>
              );
            })}
          </div>
        )}
      </div>
    
    );
  };

export default SearchBox
