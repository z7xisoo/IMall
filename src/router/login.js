const route = [
  {
    name:"login",
    path: "/login",
    component: () => import("@/login"),
    meta:{
      role:"login"
    },
  },
];

export { route };