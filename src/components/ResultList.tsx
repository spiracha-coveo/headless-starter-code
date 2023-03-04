import React from 'react'
import { useState, useEffect } from 'react';
import {ResultList as ResultListController} from '@coveo/headless'


interface ResultListProps {
    controller: ResultListController,
}

const ResultList: React.FC<ResultListProps> = (props) => {
    const {controller} = props;
    const [state, setState] = useState(controller.state);
  
    useEffect(
      () => controller.subscribe(() => setState(controller.state)),
      [controller]
    );
    if (!state.results.length) {
        return <div>No results</div>;
      }

      return (
        <div className="result-list">
          <ul>
            {state.results.map((result) => (
              <li key={result.uniqueId}>
                <article>
                  <h2>
                      {result.title}
                  </h2>
                  <p>{result.excerpt}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      );
    };

export default ResultList