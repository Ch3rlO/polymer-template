import initState from './state'

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.payload],
      }
    case 'SEARCH':
      return {
        ...state,
        posts: state.posts.filter((post) =>
          post.title.includes(action.payload.text)
        ),
      }
    default:
      return state
  }
}
