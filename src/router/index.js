import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/HomeView.vue"),
    },
    {
        path: "/simulator",
        name: "Simulator",
        component: () => import("../views/SimulatorView.vue"),
    },
    {
        path: "/ending",
        name: "Ending",
        component: () => import("../views/EndingView.vue"),
    },
    {
        path: "/about",
        name: "About",
        component: () => import("../views/AboutView.vue"),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;