const initState = {
  loading: false,
  currentPage: 'https://rickandmortyapi.com/api/character',
  list: [],
  selected: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'LOAD_CHARACTERS':
      return {
        ...state,
        loading: true
      }
    case 'LOAD_CHARACTERS_SUCCESS':
      return {
        ...state,
        list: [ ...state.list, ...action.list ],
        loading: false,
        currentPage: action.nextPage
      }
    case 'LOAD_CHARACTERS_FAILED':
      return {
        ...state,
        loading: false
      }
    case 'TOGGLE_SELECTED':
      return {
        ...state,
        selected: state.selected.includes(action.id) ? state.selected.filter(item => item !== action.id) : state.selected.concat([action.id])
      }
    default:
      return state
  }
}
