<template>
    <v-container fluid>
        <v-row dense>
            <v-col cols="12" md="4">
                  <v-text-field
                      clearable
                      placeholder="Search"
                      prepend-inner-icon="mdi-magnify"
                      variant="solo"
                      bg-color="#3D3D3D"
                      rounded="xl"
                  ></v-text-field>
              </v-col>
            <v-col cols="12" md="2">
                <v-select
                    outlined
                    hide-details
                    label="Category"
                    rounded="xl"
                    variant="solo"
                    v-model="selectedCat"
                    bg-color="#7EBD79"  
                    style="font-weight: bold;"
                    :items="['Letters','Numbers', 'Words', 'Phrases']"
                ></v-select>
             </v-col>
        </v-row>
        <v-row class="overflow-auto">
            <v-col cols="12" sm="4" md="3"
                v-for="n in 8"
                :key="n">
                <v-card
                color="#EFEBE1"
                >
                <v-card-text>
                    Gapped
                </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DictionaryPage',

    components: {

    },
    data () {
        return {
           selectedCat: 'Letters'
        }
    },
});
</script>
