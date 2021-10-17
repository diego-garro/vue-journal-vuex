// export const myGetter = (state) => {
//   return state.algo
// }

export const getEntriesByTerm = (state) => (term = "") => {
  if (term.length === 0) return state.entries

  return state.entries.firlter((entry) =>
    entry.text.toLowerCase().includes(term.toLowerCase())
  )
}

export const getEntryById = (/*state*/) => {}
