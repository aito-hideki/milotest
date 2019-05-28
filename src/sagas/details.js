import axios from 'axios'
import { call, put } from 'redux-saga/effects'

function loadCharactersApi (apiURL) {
  return axios.get(`https://rickandmortyapi.com/api/character/${apiURL}`)
}

export function * loadDetails (action) {
  try {
    const response = yield call(loadCharactersApi, action.selected.join(', '))
    yield put({
      type: 'LOAD_DETAILS_SUCCESS',
      list: response.data
    })
  } catch (error) {
    yield put({ type: 'LOAD_DETAILS_FAILED' })
  }
}
