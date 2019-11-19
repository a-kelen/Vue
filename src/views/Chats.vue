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
  <v-sheet class="" color="red">asdf</v-sheet>
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
