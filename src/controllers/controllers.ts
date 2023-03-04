import {SearchBox, buildSearchBox, buildResultList} from '@coveo/headless'
import { headlessEngine } from '../Engine'

export const searchBox: SearchBox = buildSearchBox(headlessEngine, {
    options: {
        numberOfSuggestions: 3,
    },
})

export const resultList = buildResultList(headlessEngine);