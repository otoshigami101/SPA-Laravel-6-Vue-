/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

import Vue from "vue";
import router from "./router";
import store from "./store";

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/global/ExampleComponent.vue -> <example-component></example-component>
 */

require
    .context("./components/global", true, /\.vue$/i, "lazy")
    .keys()
    .forEach(file => {
        const name = file
            .split("/")
            .pop()
            .split(".")[0];

        Vue.component(name, () => import(`./components/global/${name}`));
    });

new Vue({
    router,
    store,
    render: root => root("router-view")
}).$mount("#app");
