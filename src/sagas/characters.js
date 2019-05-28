import axios from 'axios'
import { call, put } from 'redux-saga/effects'

function loadCharactersApi (apiURL) {
  return axios.get(apiURL)
}

export function * loadCharacters (action) {
  try {
    const response = yield call(loadCharactersApi, action.currentPage)
    yield put({
      type: 'LOAD_CHARACTERS_SUCCESS',
      list: response.data.results,
      nextPage: response.data.info.next
    })
  } catch (error) {
    yield put({ type: 'LOAD_CHARACTERS_FAILED' })
  }
}
