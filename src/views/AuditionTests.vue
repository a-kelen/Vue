<template>
  <v-container>
    
  <v-sheet>
    <v-sheet v-for="(t,i) in tests" :key="i" class="d-flex  pa-3">

     <div>
        <div class="mx-5"> {{t.title}}</div>
        <div class="mx-5 caption">{{t.questions.length}} question(s)</div>
     </div>
      
      
      
      <v-spacer></v-spacer>
      <div >
        <div><span class="subtitle-2">from</span> {{owner}}</div>
       <router-link :to="{ name: 'test', params: { id: t.id , test : t }}"> <v-btn class="ma-auto">Go</v-btn></router-link>
      </div>
        
  
      
    </v-sheet>
  </v-sheet>
  </v-container>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: 'AuditionTests',
  data: () => ({
    tests : null,
    owner : '',
  }),
  created() {
      this.tests = this.gaudition(this.$route.params.id).tests;
      this.owner = this.gaudition(this.$route.params.id).name;
  },
  methods : {
    goTest() {
       
    }
  },
  computed: {
      ...mapGetters({
      gaudition: 'Audition/getAudition',
    }),
  }
  
}
</script>
