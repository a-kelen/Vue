<template>
  <v-container>
      <v-text-field v-model="newTest"></v-text-field>
      <v-btn @click="addQuestion">
          <v-icon>mdi-plus</v-icon>
          <span>Add Question</span>
      </v-btn>
     <CreateQuestion v-for="(q,i) in questions" :index="i" :question="q"  v-on:remove="questions.splice(i, 1)" :key="i"></CreateQuestion>
     <v-btn @click="addTest">Submit</v-btn>            
  </v-container>
</template>

<script>
import CreateQuestion from '../components/CreateQuestion.vue'
export default {
  data: () => ({
    newTest: '',
    questions: [],
  }),
  methods: {
      addQuestion() {
        this.questions.push({
           title : '' ,
           answers : [],
           correct : null
           });
      },
      addTest() {
        
        this.$store.dispatch('Test/createTest',{
       title : this.newTest,
       questions : this.questions,
       auditionId: this.$route.params.id
      });
      },
    removeQuestion() {
        this.questions.splice(i,1);
    }
  },
  components: {
      CreateQuestion
  }
}
</script>
