<template>
  <v-container class="text-xs-center" style="width:500px">
    <v-col align="center">
      <v-form ref="form">
        <v-text-field
          v-model="firstName"
          label="First name"
          disabled
        ></v-text-field>
        <v-text-field
          v-model="lastName"
          label="Last name"
          disabled
        ></v-text-field>
        <v-text-field
          v-model="firstAddress"
          label="Address 1"
          disabled
        ></v-text-field>
        <v-text-field
          v-model="secondAddress"
          label="Address 2"
          disabled
        ></v-text-field>
        <v-select
          v-model="state"
          :items="states"
          label="State"
          disabled
        ></v-select>
        <v-text-field
          v-model="zip"
          type="number"
          label="Zip code"
          disabled
        ></v-text-field>
        <v-text-field
          v-model="phoneNumber"
          type="number"
          label="Phone number"
          disabled
        ></v-text-field>
        <v-text-field
          v-model="email"
          label="Email address"
          disabled
        ></v-text-field>
        <v-checkbox
          v-model="privAgreement"
          label="Privacy Agreement"
          disabled
        ></v-checkbox>
      </v-form>
      <v-btn
        elevation="2"
        @click="redirHome"
      >Home</v-btn>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    firstName: "",
    lastName: "",
    firstAddress: "",
    secondAddress: "",
    state: "",
    email: "",
    zip: "",
    phoneNumber: "",
    privAgreement: true,
    states: [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC',
    'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA',
    'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH',
    'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR',
    'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI',
    'WY' ],
  }),
  mounted: function() {
    this.firstName = this.$store.state.firstName,
    this.lastName = this.$store.state.lastName,
    this.firstAddress = this.$store.state.firstAddress,
    this.secondAddress = this.$store.state.secondAddress,
    this.state = this.$store.state.state,
    this.email = this.$store.state.email,
    this.zip = this.$store.state.zip,
    this.phoneNumber = this.$store.state.phoneNumber,
    this.privAgreement = this.$store.state.privAgreement
  },
  methods: {
    redirHome() {
      this.$router.push({ path: "/" });
      this.$store.state.homeButton = true;
    }
  }
};
</script>
