import {SearchBox, 
        buildSearchBox, 
        buildResultList,
        buildFacet,
        buildPager,
        buildInstantResults,
        SortCriterion,
        buildRelevanceSortCriterion,
        buildDateSortCriterion,
        SortOrder,
        buildSort
      } from '@coveo/headless';

import { headlessEngine } from '../Engine'

export const searchBox: SearchBox = buildSearchBox(headlessEngine)

export const instantResults = buildInstantResults( headlessEngine,{options: {maxResultsPerQuery: 1}});

export const resultList = buildResultList(headlessEngine);

export const categoryFacet = buildFacet(headlessEngine, {options: {field: 'ec_category'}});
export const colorFacet = buildFacet(headlessEngine, {options: {field: 'cat_color'}});

export const pager = buildPager(headlessEngine)

export const criteria: [string, SortCriterion][] = [
    ['Relevance', buildRelevanceSortCriterion()],
    ['Date (Ascending)', buildDateSortCriterion(SortOrder.Ascending)],
    ['Date (Descending)', buildDateSortCriterion(SortOrder.Descending)],
];

const initialCriterion = criteria[0][1];
export const sort = buildSort(headlessEngine, {
    initialState: {criterion: initialCriterion},
});