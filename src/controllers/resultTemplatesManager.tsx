import {
    ResultTemplatesManager,
    Result,
    buildResultTemplatesManager,
    buildInteractiveResult
 } from '@coveo/headless';
import {headlessEngine} from '../Engine';


const interactiveResult = (result: Result) => {
    const interactiveResultController = buildInteractiveResult(headlessEngine, {
        options: { result: result},
      });
      return (
        <a
          href='#'
          onClick={() => interactiveResultController.select()}
        >
          {result.title}
        </a>
      );
}

export const resultTemplatesManager: ResultTemplatesManager<
    (result: Result) => JSX.Element> = buildResultTemplatesManager(headlessEngine);

    resultTemplatesManager.registerTemplates({
        conditions: [],
        content: (result: Result) => (
            <li key={result.uniqueId}>
            <div>
                <div className='result-item-header'>
                    {interactiveResult(result)}
                    <button className='result-button'>Add to cart</button>
                </div>
                <p>{result.excerpt}</p>
            </div>
            </li>
        ),
});