<template>
    <v-container fluid>
        <v-row dense>
            <v-col cols="12" md="4">
                  <v-text-field
                      clearable
                      placeholder="Explore FSL words"
                      prepend-inner-icon="mdi-magnify"
                      variant="solo"
                      bg-color="#3D3D3D"
                      rounded="xl"
                  ></v-text-field>
              </v-col>
            <v-col cols="12" md="2">
                <v-select
                    label="Translate"
                    rounded="xl"
                    variant="solo"
                    v-model="selectedLang"
                    bg-color="#7EBD79"  
                    style="font-weight: bold;"
                    :items="['English','Tagalog']"
                ></v-select>
             </v-col>
        </v-row>
        <v-row class="mt-n2">
            <v-col cols="12" md="6">
                <v-card
                   height="350"
                   rounded="lg"
                   color="#EFEBE1"
                >
                <!-- <v-textarea 
                bg-color="#EFEBE1"
                no-resize
                rows="15" 
                placeholder="Enter Text" 
                variant="solo"
                style="font-weight: bolder;"
                class="font-class-name"
                ></v-textarea> -->
                <p class="text">Enter Word</p>
                <textarea class="textarea"></textarea>
                </v-card>
            </v-col>
            <v-col cols="12" md="6">
                <v-card
                   color="#EFEBE1"
                   height="350"
                   rounded="lg"
                >
                <p class="text">Translation</p>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TranslatePage',

    components: {

    },
    data () {
        return {
           selectedLang: 'English'
        }
    },
});
</script>

<style scoped>
.textarea {
    width: 100%;
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    font-size: x-large;
    font-weight: bold;
    resize: none;
}
.textarea:focus {
    outline: none;
}

.text {
    padding: 10px;
    font-size: xx-large;
    font-weight: bold;
}
</style>