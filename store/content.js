/**
 * Defines Vuex store for Project data.
 */

const state = () => ({
})

const actions = {
  async loadContent( {commit} ) {
    const content = await this.$axios.$get('https://api.netlify.com/api/v1/submissions?access_token=87049b712817367902d19bd5302826073b1fc30e2f63a89e1f024425df4d8c91')
    commit('setContent', content)
  }
}

const mutations = {
  setContent(state, content) {
    this.state.content = content
  }
}

export default {
  state,
  actions,
  mutations
}
