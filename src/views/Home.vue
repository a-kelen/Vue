<template>
  <v-container>
    <Post/>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue'

export default {
  name: 'home',
  components: {
    Post
  }
}
</script>
