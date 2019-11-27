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
                 <v-textarea>sdfs</v-textarea>
                   <v-file-input label="File input"></v-file-input>

                 <v-btn class="ma-4 px-6">Send</v-btn>
            </v-sheet>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <div class="subtitle-1">Tests</div>
        </v-col>
        <v-col cols="12" sm="3">
            <router-link to="/createtest">
              <v-btn>Create new test</v-btn>
            </router-link>
        </v-col>
    </v-row>
    <v-row>
       <v-col>
            <v-sheet class="elevation-4 pa-1" color="">
            <v-row>
                <v-col cols="8" sm="9">
                    <div class="ma-2 subtitle-1">Test 1</div>
                </v-col>
                <v-col cols="8" sm="1">
                    <v-btn class="ma-1">
                        <v-icon>mdi-brush</v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="8" sm="1">
                  <v-btn dark class="ma-1" color="red">
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
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
export default {
  data: () => ({
    showCreatePost : true
  })
}
</script>
