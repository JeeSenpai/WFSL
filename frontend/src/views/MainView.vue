<template>
    <v-layout style="height: 100vh;">
      <v-navigation-drawer
        nav
        v-model="drawer"
        :rail="rail"
        width="300"
        @click="rail = false"
        color="#EFEBE1"
        class="pt-4"
      >
       <v-list>
        <v-list-item class="ml-2"
          :prepend-icon="rail ? 'mdi-transition': ''"
          nav
        >
        <v-img size="400" src="../assets/wfsl-logo.png"></v-img>
          
        </v-list-item>
        <v-list-item v-if="!rail">
            <v-list-item-title>Words to Filipino Sign Language</v-list-item-title>
        </v-list-item>
       </v-list>
        
        <v-list :class="rail ? '': 'pl-8'" density="comfortable" color="orange" nav>
          <v-list-item prepend-icon="mdi-translate" router :to="'/translate'" class="mb-5">
             <v-list-item-title class="text-subtitle-1">Translate</v-list-item-title>
          </v-list-item>
          <v-list-item prepend-icon="mdi-book-alphabet" router :to="'/dictionary'" class="mb-5">
             <v-list-item-title class="text-subtitle-1">Dictionary</v-list-item-title>
          </v-list-item>
          <v-list-item prepend-icon="mdi-help" router :to="'/quiz'" class="mb-5">
             <v-list-item-title class="text-subtitle-1">Quiz</v-list-item-title>
          </v-list-item>
          <v-list-item prepend-icon="mdi-bell" router :to="'/notifications'" class="mb-5">
             <v-list-item-title class="text-subtitle-1">Notifications</v-list-item-title>
          </v-list-item>
          <v-list-item prepend-icon="mdi-help-circle" router :to="'/help'" class="mb-5">
             <v-list-item-title class="text-subtitle-1">Help</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main class="overflow-auto">
        <v-app-bar app color="#5B7459" :elevation="0">
          <template v-slot:prepend>
            <v-app-bar-nav-icon @click="drawer ? rail = !rail : rail = false; drawer = true"></v-app-bar-nav-icon>
          </template>
          
          <v-app-bar-title>{{ $route.meta.title }}</v-app-bar-title>
          <template v-slot:append>
          <v-btn
            id="menu-activator"
            bg-color="#5B7459"
            elevation="0"
            rounded="xl"
            height="50"
          >
          <v-avatar>
              <v-img src="../assets/logo.png"></v-img>
          </v-avatar>
          <span class="pa-2 blur text-subtitle-2">Administrator</span>
          </v-btn>
          <v-menu activator="#menu-activator">
                      <v-list bg-color="#3D3D3D" rounded="lg">
                          <v-list-item>
                              <v-list-item-title>Log out</v-list-item-title>
                          </v-list-item>
                      </v-list>
                      </v-menu>
        </template>
        </v-app-bar>
          <router-view/>
      </v-main>
    </v-layout>
  
</template>

<script>
import { defineComponent } from 'vue';
import TranslatePage from '../components/TranslatePage.vue'

export default defineComponent({
  name: 'MainView',

  components: {
      TranslatePage
  },
  data () {
      return {
        drawer: true,
        rail: false,
      }
    },
    methods: {
      
    },
    mounted() {
      const isTabletOrPhone = window.matchMedia("(max-width: 1024px)").matches;
  
        if (isTabletOrPhone) {
           this.drawer = false
        } else {
            this.drawer = true
        }
    }
});
</script>
<style scoped>
@media (max-width: 767px) {
  .blur {
    display: none;
  }
}
.hide-scrollbar {
  /* Hide scrollbar for WebKit browsers (e.g., Chrome, Safari) */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Hide scrollbar for WebKit browsers */
}

</style>
