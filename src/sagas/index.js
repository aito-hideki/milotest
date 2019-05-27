import { loadCharacters } from './characters'
import { takeEvery } from 'redux-saga/effects'

export function * watchdog () {
  yield takeEvery('LOAD_CHARACTERS', loadCharacters)
}
