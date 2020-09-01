import taskService from "@/services/task.service"
import router from '@/router'

const initialState = {
    tasks: [],
    message: ""
}

const state = { ...initialState }

export const mutations = {
    SET_TASKS(state, tasks) {
        state.tasks = tasks
    },
    SET_MESSAGE(state, message){
        state.message = message
    }

}

export const getters = {
    tasks(state) {
        return state.tasks
    },
    message(state) {
        return state.message
    }
}

export const actions = {
    async getTasks({ commit }) {
        const response = await taskService.getAllTasks();
        const tasks = response.status === 200 ? await response.json() : [];
        commit("SET_TASKS", tasks)
    },
    async createTask({ commit },task) {
        const response = await taskService.createTask(task);
        const message = response.status === 200 ? "Task Created" : "something went wrong, try again later"
        commit("SET_MESSAGE", message)
        router.push("/tasks")
    },
    clearMessage({ commit }) {
        commit("SET_MESSAGE", "")
    }
}


export default { state, mutations, getters, actions }