export const loadCharacters = (currentPage) => ({
  type: 'LOAD_CHARACTERS',
  currentPage
})

export const loadCharacterFlag = (flag) => ({
  type: flag ? 'LOAD_CHARACTERS_ON' : 'LOAD_CHARACTERS_OFF'
})
