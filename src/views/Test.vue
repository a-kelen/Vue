<template>
  <v-container>
      <div class="ma-2 headline">text</div>
      
     <Question v-for="(q,i) in questions" :text="q.text" :answers="q.answers" :key="i"></Question>            
  </v-container>
</template>

<script>
import Question from '../components/Question.vue'
export default {
  data: () => ({
    text: 'Test 1',
    questions: [
        {text : 'sdf', answers: [{text: '1'},{text: '2'},{text: '3'}] },
        {text : 'sdf', answers: [{text: '1'},{text: '2'},{text: '3'}] },
    ],
  }),
  methods: {
      
  },
  components: {
      Question
  }
}
</script>
