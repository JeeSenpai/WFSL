<template>
    <v-container>
          <v-row class="d-flex justify-center align-center mt-16">
            <v-col cols="12" md="4">
                <v-form ref="formRules">
                    <v-card rounded="lg">
                        <v-container>
                            <v-row>
                                <v-col>
                                <div class="text-h5 font-weight-bold text-center">Welcome Back!</div>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field
                                    label="Email/Username"
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
                                    <v-btn
                                    color="#5B7459"
                                    height="40px"
                                    rounded="lg"
                                    width="100%">
                                        Login
                                    </v-btn>
                                </v-col>
                                <v-divider class="mt-4 mb-4 mx-4"></v-divider>
                                <v-col cols="12">
                                    <div class="text-subtitle-1 text-center">Don't have an account? <router-link
                                        to="/register"
                                    >Sign Up</router-link></div>
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