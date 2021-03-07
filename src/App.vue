<template>
  <div id="app">
    <div data-app>
      <div id="nav">
          <!-- <router-link to="/"></router-link>
          <router-link to="/person-form"> -->
            <v-btn v-if="enableButton" @click="routeToForm">Add user</v-btn>
          <!-- </router-link> -->
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    enableButton: true
  }),
  methods: {
    routeToForm() {
      this.$router.push({path: "/person-form"});
      this.enableButton = false;
    }
  }
};

</script>
