<template>
  <nav>
      <v-navigation-drawer
      v-model="drawer"
      app
      :dark="theme"
      :mini-variant="mini"
      :permanent="drawer"
      
    >
      <v-list >
         <v-list-item>
        <v-list-item-avatar @click="mini = !mini">
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>
      <router-link v-for="(item, index) in items"
          :key="index"
           :to="item.path">
        <v-list-item @click="go">
          <v-list-item-action >
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="grey accent-2"
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Akel</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          color="grey accent-4"
          dark
          v-on="on"
        >
          Admin
          <v-icon>mdi-chevron-down</v-icon>
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
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer : false,
    mini : false,
    theme : true,
     items: [
          { title: 'Home', icon: 'mdi-home', path : '/'},
          { title: 'Auditions', icon: 'mdi-library' , path : '/auditions' },
          { title: 'Chats', icon: 'mdi-chat' , path : '/chats'},
          { title: 'Tests', icon: 'mdi-clipboard-text' , path : '/tests'},
          { title: 'Results', icon: 'mdi-worker' , path : '/results'},
          { title: 'Master', icon: 'mdi-format-paint' , path : '/master'},
          { title: 'User Cabinet', icon: 'mdi-account-check' , path : '/usercabinet'},
        ],
  }),
  methods : {
    go: function() {
      
    },
    
  },
}
</script>
