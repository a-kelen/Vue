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

     <div>
        <div class="mx-5">Test 1</div>
        <div class="mx-5 caption">12 answer(s)</div>
        <div class="mx-5 caption">Completed</div>

     </div>
      
      
      
      <v-spacer></v-spacer>
      <div >
        <div>from Audition1</div>
        <v-btn @click="goTest" class="ma-auto">Go</v-btn>
      </div>
        
  
      
    </v-sheet>
  </v-sheet>
  </v-container>
</template>

<script>

export default {
  name: 'Tests',
  data: () => ({
    //
  }),
  methods : {
    goTest() {
       this.$router.push('test/1');
    }
  },
  
}
</script>
