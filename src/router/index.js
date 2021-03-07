import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PersonForm from "@/components/PersonForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path:"/person-form",
    name: "person-form",
    component: PersonForm
  }
];

const router = new VueRouter({
  routes
});

export default router;
