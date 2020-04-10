export const isHavePermission = (state) => (oArr)  => {
  return state.modulesfeatures.has(oArr.join("-"))
};
