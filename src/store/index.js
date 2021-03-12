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
    privAgreement: false
  },
  mutations: {
    setField(state, payload) {
      state[payload.key1] = payload.key2;
    }
  },
  actions: {
    updateField(ctx, payload) {
      ctx.commit("setField", payload);
    }
  },
  modules: {}
});
