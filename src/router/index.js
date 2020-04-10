import Vue from "vue";
import Router from "vue-router";
import { route as login } from "./login";
import { route as home } from "./home";
import { route as search } from "./search";
import { route as global } from "./global";

let routes = [
  ...login,
  ...home,
  ...search,
  ...global
];

Vue.use(Router);

export default new Router({ routes });
