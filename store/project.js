/**
 * Defines Vuex store for Project data.
 */

import Vue from 'vue'

export const state = () => ({
  projectList: []
})

export const actions = {
  async getProjectList ({ commit, state }) {
    if (state.projectList.length <= 0) {
      const projects = await this.$axios.$get('/submissions?access_token=87049b712817367902d19bd5302826073b1fc30e2f63a89e1f024425df4d8c91')
      commit('setProjects', projects)
    }
  }
}

export const mutations = {
  setProjects: (state, projects) => {
    const idList = []

    projects.forEach((project) => {
      idList.push(project.id)
      state.projects[project.id] = project
      state.projects = Object.assign({}, state.projects)
    })

    Vue.set(state, 'projectList', idList)
  }
}
