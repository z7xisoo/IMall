import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";

const state = {
    count:263,
    menu:[],
    role:[],
    modulesfeatures:[]
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
