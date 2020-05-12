import uuid from 'uuid'

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      // console.log('adding quote', action)
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      console.log('removing quote', action)
      return state
    case 'UPVOTE_QUOTE' :
      console.log('upvote', action)
      return state
    case 'DOWNVOTE_QUOTE' :
      console.log('downvote', action)
      return state
    default :
      return state      
  }
}
