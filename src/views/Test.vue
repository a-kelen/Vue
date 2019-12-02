<template>
  <v-container>
      <div class="ma-2 headline">{{test.title}}</div>
      
     <Question v-for="(q,i) in test.questions" @selectanswer="inputAnswer" :id="q.id" :text="q.title" :answers="q.answers" :key="i"></Question>            
    <v-sheet>
      <v-btn @click="checkTest">Submit</v-btn>
    </v-sheet>
  </v-container>
</template>

<script>
import Question from '../components/Question.vue'
import { mapGetters, mapState } from "vuex";
import router from '../router'
export default {
  data: () => ({
    test : null
  }),
  created() {
     this.test = this.$route.params.test;
     
  },
  methods: {
      inputAnswer(a) {
        this.test.questions.find(x => x.id == a.id).tempAnswer = a.res;
      },
      checkTest() {
        let ball = 0;
        if(this.allow()) {
            this.test.questions.forEach(e => {
            if(e.correct == e.tempAnswer)
            ball++;
          });
          
          this.$store.dispatch('Result/sendResult',{
            testId : this.test.id,
            userProfileId : this.id.Id,
            value : ball/this.test.questions.length
          });
            router.go(-1);
        }
      },
      allow() {
        this.test.questions.forEach(e => {
          if(e.tempAnswer == undefined)
          return false;
        });
        return true;
      }
      
  },
  computed: {
...mapState({
      id : s => s.UserProfile.profile,
    }),
  },
  components: {
      Question
  }
}
</script>
