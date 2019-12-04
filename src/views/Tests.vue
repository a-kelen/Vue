<template>
  <v-container v-if="tests.length!=0">
    <!-- <v-sheet class="d-flex ">
    <v-text-field></v-text-field>
      <v-btn class="ma-2">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
  </v-sheet> -->
  <v-sheet>
    <v-btn  v-for="i in count/2" :key="i" @click="toTest(i)" class="mx-1" min-width="1em">{{i}}</v-btn>
    
  </v-sheet>
  <v-sheet>
    <v-sheet v-for="(t,i) in tests" :key="i" class="d-flex  pa-3">

     <div>
        <div class="mx-5">{{t.title}}</div>
        <div class="mx-5 caption">{{t.questions.length}} question(s)</div>
     </div>
      
      
      
      <v-spacer></v-spacer>
      <div >
        <div><span class="subtitle-2">from</span> {{t.audition.name}}</div>
        <router-link :to="{ name: 'test', params: { id: t.id , test : t }}">
          <v-btn class="ma-auto">Go</v-btn>
        </router-link>
        
      </div>
        
  
      
    </v-sheet>
  </v-sheet>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Tests',
  data: () => ({
    //
  }),
  methods : {
    toTest(id) {
    this.$store.dispatch('Test/getAllTests',id);
console.log(id);
    }
  },
  computed: {
    ...mapState({
      tests: s => s.Test.allTests,
      count: s => s.Test.count
    })
  },
  created() {
    this.$store.dispatch('Test/getAllTests',1);
  }
  
}
</script>
