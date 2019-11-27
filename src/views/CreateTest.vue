<template>
  <v-container>
      <v-text-field></v-text-field>
      <v-btn @click="addQuestion">
          <v-icon>mdi-plus</v-icon>
          <span>Add Question</span>
      </v-btn>
     <CreateQuestion v-for="(q,i) in questions" :index="i"  v-on:remove="questions.splice(i, 1)" :key="i"></CreateQuestion>            
  </v-container>
</template>

<script>
import CreateQuestion from '../components/CreateQuestion.vue'
export default {
  data: () => ({
    questions: [],
  }),
  methods: {
      addQuestion() {
        this.questions.push({ text : ''});
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
