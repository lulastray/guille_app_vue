import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const TASKS_LIST_PATH = "/tasks"
export const REWARDS_LIST_PATH = "/rewards"
export const HOME_PATH = "/home"
export const LOGIN_PATH = "/"
export const SIGNUP_PATH = "/signup"


const routes = [

    {
        path: TASKS_LIST_PATH,
        name: "Tasks",
        component: () => import('@/views/tasks/TaskList')
    },
    {
        path: HOME_PATH,
        name: "Home",
        component: () => import('@/views/Home')  
    },
    {
        path: REWARDS_LIST_PATH,
        name:"Rewards",
        component: () => import('@/views/rewards/RewardList')
    },
    {
        path: LOGIN_PATH,
        name: "Login",
        component: () => import('@/views/auth/Login')

    },
    {
        path: SIGNUP_PATH,
        name:"Signup",
        component: () => import('@/views/auth/Signup')
    },
    // TODO: hacer pagina de not found
    {
        path: "*",
        name: "Not Found",
        component: () => import('@/views/errors/NotFound')

    }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router