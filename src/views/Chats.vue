<template>
<v-container>
  <v-row class="mb-1"
      no-gutters>
    <v-col cols="4">  
  <v-sheet  class="">
    <div class="pa-1 green" >All : {{subscribes.length}}</div>
    <v-sheet @click="toChat(c.audition.id)" v-for="(c,i) in subscribes" :key="i" class="pa-2 d-flex">
      <v-avatar size="36" color="grey">
        <span>{{c.audition.name[0]}}</span>
      </v-avatar>
      <div class="pa-2">{{c.audition.name}}</div>
      
    </v-sheet>
  </v-sheet>
  </v-col>
  <v-col cols="8">
  <v-sheet max-height="200" v-if="activeChat!=null" class="" >
    <v-sheet class="pa-2 d-flex" justify-center>
      <v-avatar  color="grey" size="48">
        <span>AK</span>
      </v-avatar>
      <div class="ma-3" >{{activeChat.audition.name}}</div>
      
 <!-- <v-menu offset-y >
      <template v-slot:activator="{ on }">
        <v-btn
          class="ma-1"
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
    </v-menu> -->

    </v-sheet>
    <v-sheet v-for="(m,i) in activeChat.audition.chat.messages" :key="i">
    <v-sheet v-if="m.userProfile.id != user.Id" class="d-flex">
      <v-sheet class="ma-3 pa-1 d-grid" color="blue" width="70%">
        <div text-color="white" class="subtitle-2">{{ m.userProfile.firstName }} {{ m.userProfile.lastName }}</div>
        <div class="body-2" color="white">{{ m.text }}</div>
      </v-sheet>
      <div class="caption mt-3" color="white">{{ convertTime(m.date) }}</div>
    </v-sheet>

    <v-sheet v-else class="d-flex">
      <div class="caption mt-3 ml-auto" color="white">{{ convertTime(m.date) }}</div>
      <v-sheet class="ma-3 pa-1 d-grid" color="green" width="70%">
        <div class="body-2" color="white">{{ m.text }}</div>
      </v-sheet>
    </v-sheet>
    </v-sheet>

    <v-sheet height="60px" class="d-flex">
      <v-textarea v-model="newMessage" class="ma-2" no-resize="" height="40px"></v-textarea>
      <v-btn @click="sendMessage" height="60px">
        <v-icon size="36">mdi-send</v-icon>
      </v-btn>
    </v-sheet>
  </v-sheet>
  <v-sheet v-else ><span class="display-2 pa-4">Select chat please</span></v-sheet>
  </v-col>
  </v-row>
</v-container>
</template>

<script>
import { HubConnectionBuilder,HttpTransportType, LogLevel } from '@aspnet/signalr'
import {mapGetters,mapState} from 'vuex'

export default {
  name: 'Chats',
  data: () => ({
    connection : null,
    activeChat : null,
    newMessage : '',
  }),
  methods : {
    go(){},
    convertTime(e) {
      let time = new Date(e);
      return  time.getFullYear() + '/' 
       + (parseInt(time.getMonth())+1) + '/'
       + time.getDay() + ' '
       + time.getHours() + ':'
       + time.getMinutes();
    },
    toChat(id) {
        this.activeChat = this.subscribes.find(x => x.audition.id == id);
        this.newMessage = '';
    },
    sendMessage() {
      this.connection.invoke('Send', {
        message: this.newMessage ,
        userId: this.user.Id,
        auditionId: this.activeChat.audition.id,
        username : this.user.FirstName + ' ' + this.user.LastName
         });
      this.newMessage = '';
    },
  },
  created(){
    this.$store.dispatch('Audition/getSubscribes',this.user.Id);
    this.connection = new HubConnectionBuilder()
    .withUrl('/chat', { transport: HttpTransportType.WebSockets | HttpTransportType.LongPolling})
    .build();
    
    let t = this;

    this.connection.start().then(res=>{
       t.connection.invoke('Enter', t.user.Id);
    });
   
    this.connection.on('Receive', function (chatId,userId, username, message, time) {
    console.log(chatId)
    console.log(username);
    console.log(message);
    console.log(time);

    t.subscribes.filter(x => x.audition.chat.id == chatId)[0].audition.chat.messages.push({
      date : time,
      text : message,
      userProfile : {
        firstName : username,
        lastName : '',
        id : userId
      }
    });

});
    
    
  },
  computed: {
    ...mapState({
      user : s => s.UserProfile.profile,
      subscribes: s => s.Audition.subscribes
    }),
  }
}
</script>
