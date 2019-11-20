<template>
  <v-container>
      <v-card color="transparent" class="d-flex ">
    <v-text-field class="ma-2"></v-text-field>
      <v-btn class="ma-2">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
  </v-card>
    <v-card class="ma-4 pa-2">Completed : 14</v-card>
    <v-card class="pa-2">
       

    <v-list-item  three-line>
      <v-list-item-content >
        <v-list-item-title>Three-line item</v-list-item-title>
        <v-list-item-subtitle>
          15/16
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          Date
        </v-list-item-subtitle>
        <v-btn class="my-2">Again</v-btn>
      </v-list-item-content>
    </v-list-item>
    
    </v-card>
    
  </v-container>
</template>

<script>

export default {
  name: 'Results',
  data: () => ({
    //
  }),
  methods : {

  }
}
</script>
