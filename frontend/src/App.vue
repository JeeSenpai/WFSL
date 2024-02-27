<template>
  <v-app class="app">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

<style>
.top-nav {
  position: sticky;
  top: 0;
  right: 0;
  background-color: #5B7459;
  z-index: 50 ;
  height: 90px;
  /* filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.1)); */
}
body{
   background-color: '#5B7459';
}

::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #5B7459;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #EFEBE1;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #197409;
}
</style>