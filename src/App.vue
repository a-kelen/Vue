<template>
  <v-app>
    <Navbar/>
    <v-content>
    <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import Navbar from './components/Navbar'
import { mapGetters, mapState } from "vuex";

export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => ({
    //
  }),
  created() {
  },
  computed:{
    ...mapState({
      id : s => s.UserProfile.user,
    }),
  }
}
</script>
<style >
a {
  text-decoration : none;
}
</style>
