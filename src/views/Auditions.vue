<template>
<v-container>
  <v-sheet class="d-flex ">
    <v-text-field></v-text-field>
      <v-btn class="ma-2">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
  </v-sheet>
  <v-sheet>
    <AuditionItem v-for="(a,i) in auditions" :key="i" :audition="a"></AuditionItem>  
  </v-sheet>
</v-container>
</template>

<script>
import UserService from "@/services/user.service";
import AuditionItem from '../components/AuditionItem'
import {mapState} from 'vuex'
import { log } from 'util';
export default {
  name: 'Auditions',
  data: () => ({
    //
  }),
  methods : {
    go(){},
    subscribeAudition(id) {
      this.$store.dispatch('Audition/subscribe',{auditionId : id, userId : this.id.Id });
    },
  },
  created : function() {
    this.$store.dispatch('Audition/getAuditions',1);
    this.$store.dispatch('Audition/getSubscribes',this.id.Id);
  },
  computed: {
    ...mapState({
      id : s => s.UserProfile.user,
      auditions : s => s.Audition.auditions ,
      subscribes: s => s.Audition.subscribes
    })
  },
  components: {
    AuditionItem
  }
}
</script>
