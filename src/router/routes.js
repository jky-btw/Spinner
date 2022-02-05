const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", redirect: "/list" },
      { path: "list", component: () => import("pages/List.vue") },
      {
        path: "map",
        name: "map",
        component: () => import("pages/Map.vue"),
      },
      {
        path: "saved",
        name: "saved",
        component: () => import("pages/Other.vue"),
      },
    ],
  },
  /*
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
  */
];
export default routes;
