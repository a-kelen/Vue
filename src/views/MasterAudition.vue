<template>
 <v-container>
   <v-sheet class="d-flex ">
    <v-text-field v-model="newAudition" label="Title of new audition"></v-text-field>
      <v-btn class="ma-2" @click="createAudition"> 
        <v-icon>mdi-plus</v-icon>
      </v-btn>
  </v-sheet>

   <v-list>
       <v-list-item
        v-for="item in auditions"
        :key="item.title"
        
      >
        <v-list-item-avatar>
          <v-icon
            class="grey lighten-1 white--text"
           
          >mdi-folder</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.name"></v-list-item-title>
          <v-list-item-subtitle >100</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn @click="editAud(item.id)">
            <v-icon color="grey lighten-1">mdi-brush</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
 </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  name: 'MasterAudition',
  data: () => ({
    newAudition: '',
    
  }),
  computed: {
      ...mapState({
       // auditions : state => state.MasterAudition.auditions,
        id : state => state.UserProfile.profile.Id
      }),
      ...mapGetters({
         auditions : 'MasterAudition/getAuditions'
      })
      
  },
  created() {
    this.$store.dispatch('MasterAudition/getAuditions',this.id);
  },
  methods : {
    do() {
      return true;
    },
    createAudition() {
      this.$store.dispatch('MasterAudition/createAudition',{
       name : this.newAudition,
       userProfileId : this.id
      });
      this.newAudition = '';
    },
    editAud(id) {
      this.$router.push('editAudition/'+id);
    }
  }
}
</script>
