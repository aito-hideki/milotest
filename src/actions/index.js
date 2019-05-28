export const loadCharacters = (currentPage) => ({
  type: 'LOAD_CHARACTERS',
  currentPage
})

export const loadDetails = (selected) => ({
  type: 'LOAD_DETAILS',
  selected
})

export const toggleSelected = (id) => ({
  type: 'TOGGLE_SELECTED',
  id
})
