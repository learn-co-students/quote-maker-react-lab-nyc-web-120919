export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE' :
      let upIndex = state.findIndex(quote => quote.id === action.quoteId)
      let upQuote = state[upIndex]
      return [
        ...state.slice(0, upIndex),
        Object.assign({}, upQuote, { votes: upQuote.votes += 1 }),
        ...state.slice(upIndex + 1)
      ]

    case 'DOWNVOTE_QUOTE' :
      let downIndex = state.findIndex(quote => quote.id === action.quoteId)
      let downQuote = state[downIndex]
      if (downQuote.votes > 0) {
        return [
          ...state.slice(0, downIndex),
          Object.assign({}, downQuote, { votes: downQuote.votes -= 1}),
          ...state.slice(downIndex + 1)
        ]
      }
      return state
    default :
      return state      
  }
}
