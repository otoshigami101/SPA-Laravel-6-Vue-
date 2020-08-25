import Vue from "vue";
import VueRouter from "vue-router";
import App from "./layout/App";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "",
            component: App,
            children: [
                {
                    path: "/",
                    component: () => import("@/js/pages/Index")
                },
                {
                    path: "/about",
                    component: () => import("@/js/pages/About")
                }
            ]
        },
        {
            path: "/login-template",
            component: () => import("@/js/pages/Login")
        }
    ]
});

export default router;
