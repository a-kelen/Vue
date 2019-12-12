<template>
  <v-sheet class="ma-2">
      <v-sheet  class="d-flex align-center">
         <div>
            <v-avatar size="36" color="red" >
              <span>AA</span>
             </v-avatar>
          </div>
          <div class="mx-2">{{comment.userProfile.firstName}} {{comment.userProfile.lastName}}</div>
          <div class="mx-2 ml-auto"></div>
      </v-sheet>
      <v-sheet color="" class="ma-2"> {{comment.text}} </v-sheet>
      <v-divider></v-divider>
  </v-sheet>
</template>

<script>
export default {
  name : 'Comment',
  data: () => ({
    
  }),
  props: ['comment'] 
}
</script>
