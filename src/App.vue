<template>
  <div id="app" align="center">
    <div data-app>
      <div id="nav">
          <v-btn v-if="enableButton" @click="routeToForm">Add user</v-btn>
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
      this.$store.state.homeButton = false;
    }
  },
  updated: function() {
    this.enableButton = this.$store.state.homeButton;
  }
};

</script>
