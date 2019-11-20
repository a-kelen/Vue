<template>
<v-container>
  <v-row class="mb-1"
      no-gutters>
    <v-col cols="4">  
  <v-sheet color="blue" class="">
    <div class="pa-1 green" >All : 20</div>
    <v-sheet class="pa-2 d-flex" >
      <v-avatar size="36" color="grey">
        <span>AK</span>
      </v-avatar>
      <div class="pa-2">Chat1</div>
      <v-btn class="ml-auto" fab x-small outlined color="green"> 
              <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
    </v-sheet>
  </v-sheet>
  </v-col>
  <v-col cols="8">
  <v-sheet class="" >
    <v-sheet class="pa-2 d-flex" justify-center>
      <v-avatar  color="grey" size="48">
        <span>AK</span>
      </v-avatar>
      <div class="ma-3" >Tony Syta</div>
      <div class="ml-auto ma-3" >Online</div>
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

    <v-sheet class="d-flex">
      <v-sheet class="ma-3 pa-1 d-grid" color="blue" width="70%">
        <div text-color="white" class="subtitle-2">Author</div>
        <div class="body-2" color="white">lor</div>
      </v-sheet>
      <div class="caption mt-3" color="white">time</div>
    </v-sheet>

    <v-sheet class="d-flex">
      <div class="caption mt-3 ml-auto" color="white">time</div>
      <v-sheet class="ma-3 pa-1 d-grid" color="green" width="70%">
        <div text-color="white" class="subtitle-2">Author</div>
        <div class="body-2" color="white">lor</div>
      </v-sheet>
      
    </v-sheet>

    <v-sheet height="60px" class="d-flex">
      <v-textarea class="ma-2" no-resize="" height="40px"></v-textarea>
      <v-btn height="60px">
        <v-icon size="36">mdi-send</v-icon>
      </v-btn>
    </v-sheet>
  </v-sheet>
  </v-col>
  </v-row>
</v-container>
</template>

<script>

export default {
  name: 'Chats',
  data: () => ({
    //
  }),
  methods : {

  }
}
</script>
