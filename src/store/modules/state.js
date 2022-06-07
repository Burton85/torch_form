const MY_ANSWERS = 'my-answers'

const state = {
  answers: JSON.parse(localStorage.getItem(MY_ANSWERS) || '[0,0,0]'),
}

const getters = {
  answersGetter: (state) => {
    return state.answers
  }
}

const actions = {
  setAnswers(context, newAnswer) {
    console.log('setAnswers', newAnswer)
    context.commit('changeAnswers', newAnswer)
  },
}

const mutations = {
  changeAnswers(state, newAnswer) {
    state.answers[newAnswer[0]] = newAnswer[1]
    console.log(state.answers)
    localStorage.setItem(MY_ANSWERS, JSON.stringify(state.answers))
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
