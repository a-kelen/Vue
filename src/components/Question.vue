<template>
  <v-sheet class="elevation-2 ma-2">
     <div class="title pa-3">{{text}}</div>
     <v-radio-group class="ma-3" v-model="answer" answer>
       <div @click="select(i)" v-for="(a,i) in answers" :key="i">
       <v-radio    :label="a.value" :value="i"></v-radio>
       </div>
    </v-radio-group>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    answer: null,
  }),
  methods: {
    select(v) {
      this.$emit('selectanswer',{
        res : v,
        id : this.id 
      });
    }
  },
  props: ['text','answers','id'],
}
</script>
