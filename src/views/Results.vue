<template>
  <v-container>
      <!-- <v-card color="transparent" class="d-flex ">
    <v-text-field class="ma-2"></v-text-field>
      <v-btn class="ma-2">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
  </v-card> -->
    <v-card class="ma-4 pa-2">Completed : {{results.length}}</v-card>
    <v-card class="pa-2">
       

    <v-list-item v-for="(r,i) in results" :key="i"  three-line>
      <v-list-item-content >
        <v-list-item-title>{{r.test.title}} <span class="subtitle-2" color="grey lighten-5"> from </span>{{r.test.audition.name}}</v-list-item-title>
        <v-list-item-subtitle>
          {{r.value * 100}} %
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          Date
        </v-list-item-subtitle>
        
      </v-list-item-content>
    </v-list-item>
    
    </v-card>
    
  </v-container>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: 'Results',
  data: () => ({
    //
  }),
  methods : {

  },
  created() {
    this.$store.dispatch('Result/getResults',this.id.Id);
  },
  computed: {
    ...mapState({
      id : s => s.UserProfile.profile,
    }),
    ...mapState({
      results: s => s.Result.results
    })
  }
}
</script>
