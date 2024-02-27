<template>
    <v-container>
          <v-row class="d-flex justify-center align-center mt-3">
            <v-col cols="12" md="4">
                <v-form ref="formRules">
                    <v-card rounded="lg">
                        <v-container>
                            <v-row>
                                <v-col>
                                <div class="text-h5 font-weight-bold text-center">Sign Up</div>
                                <div class="text-subtitle-3 text-center">Create an account</div>
                                </v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="6">
                                    <v-text-field
                                    label="First Name"
                                    :rules="[formRules.email]"
                                    variant="solo"
                                    rounded="lg"
                                    type="email"
                                    >
                                    </v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field
                                    label="Middle Name"
                                    :rules="[formRules.email]"
                                    variant="solo"
                                    rounded="lg"
                                    type="email"
                                    >
                                    </v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field
                                    label="Last Name"
                                    :rules="[formRules.email]"
                                    variant="solo"
                                    rounded="lg"
                                    type="email"
                                    >
                                    </v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field
                                    label="Birthdate"
                                    :rules="[formRules.email]"
                                    variant="solo"
                                    rounded="lg"
                                    type="email"
                                    >
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                    label="Email"
                                    :rules="[formRules.email]"
                                    variant="solo"
                                    rounded="lg"
                                    type="email"
                                    >
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                    label="Password"
                                    :rules="[formRules.password]"
                                    variant="solo"
                                    rounded="lg"
                                    type="password"
                                    >
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                    label="Confirm Password"
                                    :rules="[formRules.password]"
                                    variant="solo"
                                    rounded="lg"
                                    type="password"
                                    >
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-btn
                                    color="#5B7459"
                                    height="40px"
                                    rounded="lg"
                                    width="100%">
                                        Sign up
                                    </v-btn>
                                </v-col>
                                <v-divider class="mt-4 mb-4 mx-4"></v-divider>
                                <v-col cols="12">
                                    <div class="text-subtitle-1 text-center">Already have an account? <router-link
                                        to="/"
                                    >Login</router-link></div>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-form>
            </v-col>
          </v-row>
    </v-container>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    
})
</script>

<style  scoped>

</style>