<template>
 <v-container>
   <v-sheet class="d-flex ">
    <v-text-field></v-text-field>
      <v-btn class="ma-2">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
  </v-sheet>

   <v-list>
       <v-list-item
        v-for="item in items"
        :key="item.title"
        
      >
        <v-list-item-avatar>
          <v-icon
            :class="[item.iconClass]"
            v-text="item.icon"
          ></v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
          <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn @click="editAud">
            <v-icon color="grey lighten-1">mdi-brush</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
 </v-container>
</template>

<script>

export default {
  name: 'MasterAudition',
  data: () => ({
    items: [
        { icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
        { icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
        { icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' },
      ],
  }),
  methods : {
    do() {
      return true;
    },
    editAud() {
      this.$router.push('editAudition/12');
    }
  }
}
</script>
