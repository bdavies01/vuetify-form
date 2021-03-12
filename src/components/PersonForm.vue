<template>
  <v-container class="text-xs-center" style="width:500px">
    <v-col align="center">
      <v-form ref="form" v-model="isFormValid">
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
          :rules="addressRule"
        ></v-text-field>
        <v-text-field
          v-model="secondAddress"
          label="Address 2"
        ></v-text-field>
        <v-select
          v-model="state"
          :items="states"
          :rules="stateRule"
          label="State"
        ></v-select>
        <v-text-field
          v-model="zip"
          type="number"
          label="Zip code"
          :rules="zipRules"
        ></v-text-field>
        <v-text-field
          v-model="phoneNumber"
          type="number"
          label="Phone number"
          :rules="phoneRules"
        ></v-text-field>
        <v-text-field
          v-model="email"
          label="Email address"
          :rules="emailRules"
        ></v-text-field>
        <v-checkbox
          v-model="privAgreement"
          label="Privacy Agreement"
          :rules="checkRule"
        ></v-checkbox>
      </v-form>
      <v-row>
        <v-btn
          elevation="2"
          :disabled="!isFormValid"
          @click="submitForm"
        >Submit</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          elevation="2"
          @click="resetForm"
        >Reset</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          elevation="2"
          @click="redirHome"
        >Home</v-btn>
      </v-row>
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
    privAgreement: false,
    isFormValid: false,
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
    addressRule: [v => !!v || "Address is required"],
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
    ],
    checkRule: [v => !!v || "You must agree"],
    stateRule: [v => !!v || "Must select a state"]
  }),
  methods: {
    resetForm() {
      this.$refs.form.reset();
    },
    submitForm() {
      this.$store.dispatch("updateField", {"key1": "firstName", "key2": this.firstName});
      this.$store.dispatch("updateField", {"key1": "lastName", "key2": this.lastName});
      this.$store.dispatch("updateField", {"key1": "firstAddress", "key2": this.firstAddress});
      this.$store.dispatch("updateField", {"key1": "secondAddress", "key2": this.secondAddress});
      this.$store.dispatch("updateField", {"key1": "state", "key2": this.state});
      this.$store.dispatch("updateField", {"key1": "email", "key2": this.email});
      this.$store.dispatch("updateField", {"key1": "zip", "key2": this.zip});
      this.$store.dispatch("updateField", {"key1": "phoneNumber", "key2": this.phoneNumber});
      this.$store.dispatch("updateField", {"key1": "privAgreement", "key2": this.privAgreement});
      this.$router.push({ path: "/person-detail" });
    },
    redirHome() {
      this.$router.push({ path: "/" });
      this.$store.state.homeButton = true;
    }
  }
};
</script>
