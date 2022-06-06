const MY_ANSWERS = 'my-answers'

const state = {
  answers: JSON.parse(localStorage.getItem(MY_ANSWERS) || '{}'),
}

const getters = {
  answersGetter: (state) => {
    return state.answers
  }
}

const actions = {
  async getAnswers(context, newAnswer) {
    context.commit('changeAnswers', newAnswer)
  },
}

const mutations = {
  changeAnswers(state, newAnswer) {
    state.answers[newAnswer.type] = state.answers[newAnswer.value]
    // localStorage.setItem(MY_ANSWERS, JSON.stringify(state.answers))
    state.answers = newAnswer
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
