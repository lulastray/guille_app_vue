import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

    {
        path: "/tasks",
        name: "Tasks",
        component: () => import('@/views/TaskList')
    },
    {
        path: "/add_task",
        name: "Add tasks",
        component: () => import('@/views/TaskForm')  
    },
    {
        path:'/rewards',
        name:"Rewards",
        component: () => import('@/views/rewards/RewardList')
    },
    {
        path: "/",
        name: "Login",
        component: () => import('@/views/auth/Login')

    },
    {
        path:"/signup",
        name:"Signup",
        component: () => import('@/views/auth/Signup')
    },
    // TODO: hacer pagina de not found
    {
        path: "*",
        name: "Not Found",
        component: () => import('@/views/TaskList')

    }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router