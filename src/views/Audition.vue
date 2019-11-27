<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="3">
        <v-avatar size="150" color="grey darken-2">
        <span>AQ</span>
      </v-avatar>
      </v-col>
      <v-col cols="12" sm="8">
        <div class="display-1">Audition {{$route.params.id}}</div>
        <div class="subtitle-1" color="grey lighten-3">12313</div>
        <v-btn class="ma-2">Listen</v-btn>
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
              @click="theme = !theme"
            >
              <v-list-item-title>Change Theme</v-list-item-title>
            </v-list-item>
            <v-list-item
              @click="go"
            >
              <v-list-item-title>Log Out</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
    <v-row>
      <v-col >
        <div class="subtitle-1 mx-5">144 posts</div>
      </v-col>
       <v-col >
       <router-link to="">12 tests</router-link>
      </v-col>
       
    </v-row>
    <v-sheet>
      <Post></Post>
    </v-sheet>
  </v-container>
</template>

<script>
import Post from '@/components/Post.vue'

export default {
  name: 'Audition',
  data: () => ({
    //
  }),
  methods : {

  },
  components: {
    Post
  }
}
</script>
