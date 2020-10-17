import authService from "@/services/auth.service"
import router from '@/router'

const initialState = {
    user: {}, 
    errorMessage:""
}

const state = { ...initialState }

export const mutations = {
    SET_USER(state, user) {
        state.user = user
    },
    SET_ERROR_MESSAGE(state, errorMessage){
        state.errorMessage = errorMessage
    }

}

export const getters = {
    user(state) {
        return state.user
    },
    errorMessage(state){
        return state
    }
}

export const actions = {
    async loginUser({ commit }) {
        const response = await authService.loginUser();
        //TODO: switch case para gestion de los errores
        //200 response.json
        //401 response.json message
        //default (500) 
        const user = response.status === 200 ? await response.json() : [];
        commit("SET_USER", user)
    },
    async signupUser({ commit },user) {
        const response = await authService.signup(user);
        const message = response.status === 200 ? "Task Created" : "something went wrong, try again later"
        commit("SET_MESSAGE", message)
        router.push("/tasks")
    },

}


export default { state, mutations, getters, actions }