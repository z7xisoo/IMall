import Vue from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import "./directive";
import ElementUI from 'element-ui';
import './style/index.css';

// 全局监听 会导致 登录直接进入  404 以及刷新后 直接进入 404
// store 执行晚与 全局路由守卫
// 由于 路由权限实现方式多种，这里就不完善了
// // 添加全局路由守卫，权限判断，
// router.beforeEach((to, from, next) => {
//   console.log(to,"totototototot");
//   console.log(from,"fromfromfromfromfromfrom");
  
//   const role = store.state.global.role;
//   // 过滤掉基本路由
//   if (["/", "/404", "/403", "/login"].includes(to.path)) {
//     next();
//   } else {
//     if (!role.length) {
//       router.push({ path: from.path })
//     }
//     // 不在权限内的路由
//     if (!role.includes(to.meta.role)) {
//       // 可不导航，或者跳到403  404
//       // next(from.path);
//       // next("/403");
//       next("/404");
//       // next("/");
//     } else {
//       next();
//     }
//     next();
//   }
// });

Vue.use(ElementUI);
new Vue({
  router,
  store,
  el: "#root",
  render: h => h(App)
});
