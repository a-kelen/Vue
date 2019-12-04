<template>
  <v-container v-if="posts.length!== 0">
      <Post v-for="(p,i) in posts" :owner="p.audition.name" :post="p" :key="i"></Post>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post2.vue'
import { mapGetters, mapState } from "vuex";

export default {
  name: 'home',
  components: {
    Post
  },
  created() {
    this.$store.dispatch('Post/getPosts',this.id.Id);
  },
  computed: {
    ...mapState({
      id : s => s.UserProfile.user,
    }),
    ...mapState({
      posts: s => s.Post.posts
    })
  }
}
</script>
