import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        order: false,
        userName: '',
        userPassword: ''
    },

    getters: {

    },

    mutations: {
        orederOK(state) {
            state.order = true
        },
        setUser(state, name, pass) {
            state.userName = name
            state.userPassword = pass
        }
    },

    actions: {

    }
});