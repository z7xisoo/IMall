
const menu = require("./menu.json");
import api from "api";


export const getToken = ({ commit }) => {
  return new Promise((s) => {
    console.log(api,"api");
    localStorage.setItem("token","kkkkkkkkkk")
    s(menu);
  });
};

export const getConfiguration = ({ commit }) => {
  return new Promise((s, j) => {
    commit("setMenu", menu);
    commit("setRole", menu);
    commit("setModulesfeatures", menu);
    s(menu);
  });
};
