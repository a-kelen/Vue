<template>
  <v-sheet class="elevation-2 ma-2">
     <div class="title pa-3">{{text}}</div>
     <v-radio-group class="ma-3" v-model="answer" answer>
      <v-radio v-for="(a,i) in answers" :key="i" :label="a.text" :value="i"></v-radio>
      
    </v-radio-group>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    answer: null,
  }),
  props: ['text','answers'],
}
</script>
