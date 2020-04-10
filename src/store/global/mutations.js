export const setCount = (state, num) => {
  state.count = num;
};
export const setMenu = (state, menu) => {
  return state.menu = [...menu];
};
export const setRole = (state, menu) => {
  return state.role = menu.map(item => {
    return item.moduleName;
  });
};

export const setModulesfeatures = (state, menu) => {
  let os = new Set();
  (function fx(el){
    el.forEach(el => {
      if (el.features) {
        el.features.forEach(fl => {
          os.add(`${el.moduleName}-${fl}`)
        })
      }
      if (el.submenu) {
        fx(el.submenu)
      }
    });
  })(menu)
  return state.modulesfeatures = os;
};
