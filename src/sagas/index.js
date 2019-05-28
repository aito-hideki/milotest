import { loadCharacters } from './characters'
import { loadDetails } from './details'
import { takeLatest } from 'redux-saga/effects'

export function * watchdog () {
  yield takeLatest('LOAD_CHARACTERS', loadCharacters)
  yield takeLatest('LOAD_DETAILS', loadDetails)
}
