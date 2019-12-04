<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="3">
        <v-avatar size="150" color="grey darken-2">
       <v-img v-if="audition.photo!=null" :src="image" ></v-img>
        <span v-else>{{audition.name[0]}}</span>
      </v-avatar>
      </v-col>
      <v-col cols="12" sm="8">
        <div class="display-1">{{audition.name}}</div>
        <div class="subtitle-1" color="grey lighten-3">12313</div>
         <v-btn v-if="!isSubscribe" @click="subscribeAudition(audition.id)" class="ma-1 mx-3">Subscribe</v-btn>
      <v-btn v-if="isSubscribe" @click="subscribeAudition(audition.id)" color="red darken-1" class="ma-1 mx-3">Unsubscribe</v-btn>
      </v-col>
      <v-col cols="12" sm="1">
        <v-menu offset-y  >
          <template v-slot:activator="{ on }">
            <v-btn
              class="ml-n6"
              color="grey accent-4"
              dark
              v-on="on"
              
            >
              
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
            
            >
              <v-list-item-title>Change Theme</v-list-item-title>
            </v-list-item>
            <v-list-item
              
            >
              <v-list-item-title>Log Out</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
    <v-row>
      <v-col >
        <div class="subtitle-1 mx-5">{{audition.posts.length}} posts</div>
      </v-col>
       <v-col >
       <router-link :to="{ name: 'auditionTests', params: { id: audition.id, tests: audition.tests , owner : audition.name }}">{{audition.tests.length}} tests</router-link>
      </v-col>
       
    </v-row>
    <v-sheet>
      <Post v-for="(p,i) in audition.posts" :owner="audition.name" :post="p" :key="i"></Post>
    </v-sheet>
  </v-container>
</template>

<script>
import Post from '@/components/Post.vue'
import { mapGetters, mapState } from "vuex";
import router from '../router'
export default {
  name: 'Audition',
  data: () => ({
    audition: null,
  }),
  computed: {
    ...mapGetters({
      gaudition: 'Audition/getAudition',
    }),
    ...mapState({
      id : s => s.UserProfile.user,
      subscribes: s => s.Audition.subscribes
    }),
    isSubscribe(){
        return this.subscribes.find(x=>x.auditionId == this.audition.id) != null;
    },
    image() {
          return 'https://localhost:44312' + this.audition.photo;
      },
  },
  created() {
     this.audition = this.gaudition(this.$route.params.id);
     if(this.audition == undefined) {
       router.go(-1);
     }
     
  },
  methods : {
    subscribeAudition(id) {
      this.$store.dispatch('Audition/subscribe',{auditionId : id, userId : this.id.Id });
    },
  },
  components: {
    Post
  }
}
</script>
