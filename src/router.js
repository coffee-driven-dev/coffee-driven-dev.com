import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Join from "./views/Join.vue";
import { beforeEachGuard } from "./pages.js";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/join-our-network",
      name: "join",
      component: Join
    }
  ]
});

router.beforeEach((to, from, next) => {
  beforeEachGuard(to.name);
  next();
});

export default router;
