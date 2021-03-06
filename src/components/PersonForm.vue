<template>
  <v-container class="text-xs-center" style="width:500px">
    <v-col align="center">
      <v-form ref="form">
        <v-text-field
          v-model="firstName"
          label="First name"
          :rules="nameRules"
          required
        ></v-text-field>
        <v-text-field
          v-model="lastName"
          label="Last name"
          :rules="nameRules"
          required
        ></v-text-field>
        <v-text-field
          v-model="firstAddress"
          label="Address 1"
          :rules="addressRules"
        ></v-text-field>
        <v-text-field
          v-model="secondAddress"
          label="Address 2"
        ></v-text-field>
        <v-select
          v-model="state"
          :items="states"
          label="State"
        ></v-select>
        <v-text-field
          v-model="model"
          type="number"
          label="Zip code"
          :rules="zipRules"
        ></v-text-field>
        <v-text-field
          v-model="model"
          type="number"
          label="Phone number"
          :rules="phoneRules"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :counter="max"
          label="Email address"
          :rules="emailRules"
        ></v-text-field>
      </v-form>
      <v-checkbox
        v-model="privAgreement"
        label="Privacy Agreement"
      ></v-checkbox>
      <v-btn elevation="2">Submit</v-btn>
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
    privAgreement: false,
    states: [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC',
    'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA',
    'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH',
    'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR',
    'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI',
    'WY' ],
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    addressRules: [v => !!v || "Address is required"],
    phoneRules: [
      v => !!v || "Phone number is required",
      v => /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s.]{0,1}[0-9]{3}[-\s.]{0,1}[0-9]{4}$/.test(
        v) || "Phone number must be valid"
    ],
    zipRules: [
      v => !!v || "Zip code is required",
      v => (v && v.length == 5) || "Zip code must be 5 numbers"
    ],
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ]
  }),
  methods: {
    validateField() {
      this.$refs.form.validate();
    }
  }
};
</script>
