import { createRouter, createWebHistory } from "vue-router";

import ShellComponent from "@/components/Shell.component.vue";
import WelcomeComponent from "@/components/Welcome.component.vue";
import AboutComponent from "@/components/About.component.vue";

const routes = [
  {
    path: "/",
    name: "root",
    component: ShellComponent,
    children: [ {
      path: "welcome",
      name: "welcome",
      component: WelcomeComponent
    }, {
      path: "about",
      name: "about",
      component: AboutComponent
    }],
  }
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
