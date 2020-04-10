const route = [
  {
    name: "home",
    path: "/home",
    component: () => import("@/home"),
    meta:{
      role:"home"
    },
    children: [
      {
        name: "home-1",
        path: "home-1",
        component: () => import("@/home"),
        meta:{
          role:"home"
        }
      }
    ],
  },
];

export { route };