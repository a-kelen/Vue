<template>
 <v-container>
   <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        
      >
        <v-list-item-icon>
          <v-icon v-if="item.icon" color="pink">mdi-star</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>
      </v-list-item>
    </v-list>
 </v-container>
</template>

<script>

export default {
  name: 'MasterAudition',
  data: () => ({
    //
  }),
  methods : {
    do() {

    }
  }
}
</script>
