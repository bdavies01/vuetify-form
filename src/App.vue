<template>
  <v-app>
    <v-main>
      <PersonForm />
    </v-main>
  </v-app>
</template>

<script>
import PersonForm from "./components/PersonForm";

export default {
  name: "App",

  components: {
    PersonForm
  },

  data: () => ({
    //
  })
};
</script>
