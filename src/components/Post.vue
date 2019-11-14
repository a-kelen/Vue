<template>
    <div>
  <v-sheet elevation="4" class="ma-2">
      <v-sheet color="green" class="pa-2 d-flex align-center">
          <v-avatar color="white" class="">
              <span>AK</span>
          </v-avatar>
          <div class="display-5 mx-3">Firstname Lasname</div>
          <v-btn class="ml-auto" fab x-small outlined color="white"> 
              <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
      </v-sheet>
      <div class="mx-6 mt-3 headline">Text</div>
      <div class="pa-5 text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius assumenda voluptatum reprehenderit. Aspernatur totam deserunt nostrum quae quia, obcaecati, voluptate molestiae adipisci reprehenderit, nobis non facilis tempore expedita distinctio eveniet!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio earum assumenda cupiditate, in non saepe velit odio illum culpa natus maxime esse sed numquam tenetur iure, provident quia. Accusamus, quae?
      </div>
      <v-img></v-img>
      <v-sheet color="grey lighten-4" class="pa-2 d-flex">
        <v-btn @click="showComms = !showComms">Comments</v-btn>
        <div class="align-self-center mx-3">time</div>

        <v-spacer/>
        <div class="align-self-center mx-3">1231</div>
        <v-btn fab small class="ml-auto">
            <v-icon color="red">mdi-heart</v-icon>
        </v-btn>
      </v-sheet>
  </v-sheet>
  <v-sheet v-if="showComms" class="ma-4" color="grey lighten-3">
      <v-sheet color="d-flex align-center" dense>
            <v-text-field class="mx-2" color="green" v-model="activeWritenComm"></v-text-field>
            <v-btn class="mx-3">
                <v-icon>mdi-send</v-icon>
            </v-btn>
      </v-sheet>
      
      <Comment/>
  </v-sheet>

  </div>
</template>

<script>
import Comment from './Comment.vue'

export default {
    components: {
        Comment 
    },
  data: () => ({
    showComms: false,
    activeWritenComm : ''
  })
}
</script>
