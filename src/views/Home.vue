<template>
  <div class="home">
    <div id="nav">
        <v-btn @click="routeToForm">Add user</v-btn>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  methods: {
    routeToForm() {
      this.$router.push({path: "/person-form"});
    }
  }
};
</script>
