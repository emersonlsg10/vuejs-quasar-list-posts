// export function someMutation (/* state */) {
// }
const SET_POSTS = (state, dados) => {
  state.posts = dados
}
const SET_ARTIGO = (state, dados) => {
  state.artigo = dados
}

const CLEAR_ARTIGO = (state) => {
  state.artigo = {}
}

export {
  SET_POSTS,
  SET_ARTIGO,
  CLEAR_ARTIGO
}
