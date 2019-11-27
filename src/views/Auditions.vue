<template>
<v-container>
  <v-sheet class="d-flex ">
    <v-text-field></v-text-field>
      <v-btn class="ma-2">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
  </v-sheet>
  <v-sheet>
    <v-sheet class="d-flex  pa-3">

      <v-avatar size="80" color="grey darken-2">
        <span>AQ</span>
      </v-avatar>
      
      <router-link to="/auditions/1">Audition 1</router-link>
      
      <v-spacer></v-spacer>
      <v-btn class="ma-1 mx-3">Subscribe</v-btn>
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
  </v-sheet>
</v-container>
</template>

<script>

export default {
  name: 'Auditions',
  data: () => ({
    //
  }),
  methods : {

  }
}
</script>
