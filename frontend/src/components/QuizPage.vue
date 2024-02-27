<template>
    <v-container fluid>
        <v-row dense>
            <v-col cols="12" md="2">
                <v-select
                    outlined
                    hide-details
                    label="Difficulty"
                    rounded="xl"
                    variant="solo"
                    v-model="selectedDif"
                    bg-color="#7EBD79"  
                    style="font-weight: bold;"
                    :items="['Beginners','Experienced', 'Expert']"
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
    name: 'QuizPage',

    components: {

    },
    data () {
        return {
           selectedDif: 'Beginners'
        }
    },
});
</script>
