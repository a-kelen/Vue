<template>
  <v-sheet  class="d-flex  pa-3">

      <v-avatar size="80" color="grey darken-2">
        <span>AQ</span>
      </v-avatar>
      
      <router-link class="mx-5" :to="{ name: 'audition', params: { id: audition.id }}" >{{audition.name}}</router-link>
      
      <v-spacer></v-spacer>
      <v-btn v-if="!isSubscribe" @click="subscribeAudition(audition.id)" class="ma-1 mx-3">Subscribe</v-btn>
      <v-btn v-if="isSubscribe" @click="subscribeAudition(audition.id)" color="red darken-1" class="ma-1 mx-3">Unsubscribe</v-btn>
        <v-menu offset-y >
       <template v-slot:activator="{ on }">
        <v-btn
          class="ma-1"
          color="grey accent-4"
          dark
          v-on="on"
          
        >
          
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
       </template>
       <v-list>
        <v-list-item
          @click="theme = !theme"
        >
          <v-list-item-title>Change Theme</v-list-item-title>
        </v-list-item>
        <v-list-item
          @click="go"
        >
          <v-list-item-title>Log Out</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  
      
    </v-sheet>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data: () => ({
    
  }),
  methods: {
    go(){},
    subscribeAudition(id) {
      this.$store.dispatch('Audition/subscribe',{auditionId : id, userId : this.id.Id });
    },
  },
  computed: {
      ...mapState({ 
          id : s => s.UserProfile.user,
          subscribes: s => s.Audition.subscribes
    }),
    isSubscribe(){
        return this.subscribes.find(x=>x.auditionId == this.audition.id) != null;
    }
  },
  props: ['audition']
}
</script>
