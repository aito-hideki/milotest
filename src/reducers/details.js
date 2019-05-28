const initState = {
  list: [],
  loading: false
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'LOAD_DETAILS':
      return {
        ...state,
        loading: true
      }
    case 'LOAD_DETAILS_SUCCESS':
      console.log(action)
      return {
        ...state,
        list: Array.isArray(action.list) ? action.list : [ action.list ],
        loading: false
      }
    case 'LOAD_DETAILS_DETAILS':
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
