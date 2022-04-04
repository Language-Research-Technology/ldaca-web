import { createRouter, createWebHistory } from "vue-router";
import ShellComponent from "@/components/Shell.component.vue";
import WelcomeComponent from "@/components/Welcome.component.vue";
import HelpComponent from "@/components/Help.component.vue";

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
      path: "help",
      name: "help",
      component: HelpComponent
    }],
  }
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
