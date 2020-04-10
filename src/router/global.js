const route = [
  {
    path: "/",
    component: () => import("@/login"),
  },
  {
    name: "404",
    path: "/404",
    component: () => import("@/login"),
  },
  {
    name: "403",
    path: "/403",
    component: () => import("@/login"),
  },
  {
    path: "*",
    component: () => import("@/login"),
  },
];

export { route };