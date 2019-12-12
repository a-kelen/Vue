<template>
    <div>
  <v-sheet elevation="4" class="ma-2">
      <v-sheet color="green" class="pa-2 d-flex align-center">
          <v-avatar size="36" color="white" class="">
              <span>AK</span>
          </v-avatar>
          <div class="display-5 mx-3">{{owner}}</div>
          <v-btn class="ml-auto" fab x-small outlined color="white"> 
              <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
      </v-sheet>
      <!-- <div class="mx-6 mt-3 headline">Text</div> -->
      <div class="pa-5 text-justify">
           {{post.text}}
      </div>
      <v-img v-if="post.photo.path!=null" :src="image" ></v-img>
      <v-sheet color="grey lighten-4" class="pa-2 d-flex">
        <v-btn @click="showComms = !showComms">Comments</v-btn>
        <div class="align-self-center mx-3"></div>

        <v-spacer/>
        <div class="align-self-center mx-3">{{post.likesCount}}</div>
        <v-btn @click="sendLike(post.id)" fab small class="ml-auto">
            <v-icon color="red">mdi-heart</v-icon>
        </v-btn>
      </v-sheet>
  </v-sheet>
  <v-sheet v-if="showComms" class="mx-5" elevation="2" >
      <v-sheet color="d-flex align-center" dense>
            <v-text-field class="mx-2" color="green" v-model="activeWritenComm"></v-text-field>
            <v-btn @click="sendComm" class="mx-3">
                <v-icon>mdi-send</v-icon>
            </v-btn>
      </v-sheet>
      <v-divider ></v-divider>
      <Comment v-for="(c,i) in post.comments" :comment="c" :key="i"/>
      
  </v-sheet>

  </div>
</template>

<script>
import Comment from './Comment.vue'
import { mapGetters, mapState } from "vuex";
export default {
    components: {
        Comment 
    },
    props: ['post','owner'],
  data: () => ({
    showComms: false,
    activeWritenComm : ''
  }),
  methods: {
      sendLike(id) {
          this.$store.dispatch('Post/sendLike',{ 
              postId : id,
              userProfileId : this.id.Id
          });
      },
      sendComm() {
          if(this.activeWritenComm!='')
          this.$store.dispatch('Post/sendComm',{
              userProfileId : this.id.Id,
              postId : this.post.id,
              text : this.activeWritenComm
          });
          this.post.comments.push({
            text : this.activeWritenComm,
            userProfile : {
                firstName: this.id.FirstName,
                lastName: this.id.LasttName
            } 
          });
          this.activeWritenComm = '';
      }
  },
  computed:{
      image() {
          return 'https://localhost:44312' + this.post.photo.path;
      },
      ...mapState({
      id : s => s.UserProfile.profile,
    }),
  }
}
</script>
