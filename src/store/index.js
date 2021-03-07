import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    firstName: "",
    lastName: "",
    firstAddress: "",
    secondAddress: "",
    state: "",
    email: "",
    zip: "",
    phoneNumber: "",
    privAgreement: false,
    homeButton: true
  },
  mutations: {},
  actions: {},
  modules: {}
});
