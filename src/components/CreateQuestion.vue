<template>
  <v-sheet class="elevation-2 ma-2">
     <v-text-field v-model="question.title" class="mx-10"></v-text-field>
     <v-btn @click="addAnswer" class="mx-5">Add answer</v-btn>
     <v-btn @click="$emit('remove')" class="mx-5">Detele this question</v-btn>
     <v-radio-group class="ma-3"  v-model="question.correct" corect>
        
            <v-row  class="ma-3 elevation-2" width="10em" v-for="(a,index) in question.answers" :key="index">
                 <v-text-field class="mx-3" v-model="a.value"></v-text-field>
                <v-radio class="mx-3" :value="index"></v-radio>
                <v-btn class="ma-4" color="red lighten-1" dark @click="deleteAnswer(index)">
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
               
            
            </v-row>
       
    </v-radio-group>
    
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
      
  }),
  methods: {
      addAnswer() {
          this.question.answers.push({value:''});
      },
      deleteAnswer(index) {
          this.question.answers.splice(index,1);
      },
  },
 props: ['index', 'question']
}
</script>
