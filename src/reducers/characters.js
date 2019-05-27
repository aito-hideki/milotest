const initState = {
  loading: false,
  currentPage: 'https://rickandmortyapi.com/api/character',
  list: {}
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'LOAD_CHARACTERS_SUCCESS':
      return {
        ...state,
        list: { ...state.list, ...action.list },
        currentPage: action.nextPage
      }
    case 'LOAD_CHARACTERS_FAILED':
      break
    case 'LOAD_CHARACTERS_ON':
      return {
        ...state,
        loading: true
      }
    case 'LOAD_CHARACTERS_OFF':
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
