<template>
  <v-container>
    <v-row>
        <v-btn @click="showCreatePost = !showCreatePost">
            add post
        </v-btn>
    </v-row>
    <v-row>
        <v-col>
            <v-sheet class="pa-2" v-if="showCreatePost">
                 <v-textarea v-model="postText"></v-textarea>
                   <v-file-input accept="image/*"  v-model="files" label="File input" prepend-icon="mdi-camera"></v-file-input>

                 <v-btn @click="createPost" class="ma-4 px-6">Send</v-btn>
            </v-sheet>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <div class="subtitle-1">Tests</div>
        </v-col>
        <v-col cols="12" sm="3">
            
              <v-btn @click="toCreateTest">Create new test</v-btn>
           
        </v-col>
    </v-row>
    <v-row>
       <v-col >
            <v-sheet class="elevation-4 pa-1" color="">
            <v-row v-for="(a,i) in tests" :key="i">
                <v-col cols="8" sm="8">
                    <div class="ma-2 subtitle-1">{{a.title}}</div>
                </v-col>
               
                <v-col cols="8" sm="3">
                  <v-bottom-sheet  v-model="sheet">
                <template v-slot:activator="{ on }">
                  <v-btn
                    color="red"
                    dark
                    class="ma-1"
                    v-on="on"
                    
                  >
                    Delete test
                  </v-btn>
                </template>
                <v-sheet class="text-center" height="200px">
                    <v-row>
                    <v-col cols="12" sm="6">
                      <v-btn
                    class="mt-6"
                    @click="deleteTest(a.id)"                    
                    color="red"
                    dark
                    
                  >Delete</v-btn>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-btn
                    class="mt-6"
                    
                    color="black"
                    dark
                    @click="sheet = !sheet"
                  >close</v-btn>
                    </v-col>
                    </v-row>
                  
                  
                
                </v-sheet>
              </v-bottom-sheet>
                </v-col>
            </v-row>
        </v-sheet>
       </v-col>
    </v-row>
    <v-row>

    </v-row>
  </v-container>
</template>

<script>
import { mapState,mapGetters } from "vuex";
export default {
  data: () => ({
    sheet: false,
    showCreatePost : true,
    audition : null,
    postText : '',
    files : null
  }),
  computed: {
    ...mapState({
        id : state => state.UserProfile.profile.Id,
        tests : state => state.Test.tests
      }),
    ...mapGetters({
      aud: 'MasterAudition/getAudition'
    }),
  },
  created() {
   this.audition = this.aud(this.$route.params.id);
   this.$store.dispatch('Test/getTests',this.$route.params.id);
  },
  methods: {
    deleteTest(id) {
       this.$store.dispatch('Test/deleteTest',id);
       this.sheet = false;
    },
    editTest(id) {
        this.$router.push('/edittest/'+id);
    },
    toCreateTest() {
      this.$router.push('/createtest/' + this.$route.params.id);
    },
    createPost() {
      let photo =null;
      if(this.files != null) {
      photo = new FormData();
      photo.append('photo',this.files);
      } 
       
      this.$store.dispatch('MasterAudition/createPost',{
        text: this.postText,
        likes: 0,
        auditionId : this.$route.params.id,
        photo : photo

      });
    }
  }
}
</script>
