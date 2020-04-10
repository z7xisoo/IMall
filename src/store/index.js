import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import login from "./login";
import home from "./home";
import global from "./global";

const modules = { 
  login,
  home,
  global
};

// const context = require.context("../modules", true, /store\/index\.js$/);
// context.keys().forEach((key) => {
//   modules[key.replace(/^\.\/|\/store\/index\.js$/g, "")] = { namespaced: true, ...context(key).default };
// });

const store = new Vuex.Store({
  modules,
  strict: true,
});

export default store;
