import Vue from "vue"
import Vuex from "vuex"
import tasks from "./tasks.module"
import rewards from "./rewards.module"

Vue.use(Vuex)


const store = new Vuex.Store({
    modules: {
        tasks, rewards
    }
})

export default store