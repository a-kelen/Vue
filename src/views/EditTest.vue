<template>
  <v-container>
      <v-text-field v-model="test.title"></v-text-field>
      <v-btn @click="addQuestion">
          <v-icon>mdi-plus</v-icon>
          <span>Add Question</span>
      </v-btn>
     <CreateQuestion v-for="(q,i) in test.questions" :index="i" :question="q"  v-on:remove="questions.splice(i, 1)" :key="i"></CreateQuestion>
     <v-btn @click="updateTest">Update</v-btn>            
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import CreateQuestion from '../components/CreateQuestion.vue'
export default {
  data: () => ({
    test : null,
  }),
  created() {
      this.test = this.getTest(this.$route.params.id);
      
      
  },
  computed: {
...mapGetters({
    getTest : 'Test/getTest'   
})
  },
  methods: {
      addQuestion() {
        this.questions.push({
           title : '' ,
           answers : [],
           correct : null
           });
      },
      updateTest() {
        
        this.$store.dispatch('Test/updateTest',this.test);
      },
    removeQuestion() {
        this.questions.splice(i,1);
    }
  },
  components: {
      CreateQuestion
  },
  
  
}
</script>
