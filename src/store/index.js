import {createStore} from 'vuex'

export default createStore({
    state: {
        count: 0,
    },
    getters: {},
    mutations: {
        setIncrement(state) {
            state.count++
        }
    },
    actions: {
        AddIncrement({commit}) {
            commit("setIncrement");
        }
    },
    modules: {}
})
