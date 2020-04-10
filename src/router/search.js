const route = [
  {
    name: "search",
    path: "/search",
    component: () => import("@/home"),
    meta:{
      role:"search"
    },
    children: [
      {
        name: "search-1",
        path: "search-1",
        component: () => import("@/home"),
        meta:{
          role:"search"
        }
      }
    ],
  },
];

export { route };