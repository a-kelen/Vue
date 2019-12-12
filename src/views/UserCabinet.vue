<template>
<v-container>
  <v-sheet class="pa-4">
      <v-row no-gutters="" class="md-8">
        <v-col cols="6">
          <v-text-field label="Firstname" v-model="firstname" class="pa-2"></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field label="Lastname" v-model="lastname" class="pa-2"></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field label="Country" v class="pa-2"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-date-picker class="ma-4" max="2019-11-24" v-model="picker"></v-date-picker>
        </v-col>
        <v-col cols="12">
          <v-radio-group v-model="sex">
                <v-radio label="Male" value="true"></v-radio>
                <v-radio label="Female" value="false"></v-radio>
              </v-radio-group>
        </v-col>
        <v-col cols="12" sm="5">
          <v-text-field
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="showPassword ? 'text' : 'password'"
            name="input-10-2"
            label="Old Password"
            hint="At least 8 characters"
            value=""
            v-model="oldPassword"
            class="input-group--focused pa-2"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="5">
          <v-text-field
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="showPassword ? 'text' : 'password'"
            name="input-10-2"
            label="New Password"
            hint="At least 8 characters"
            value=""
            class="input-group--focused"
            v-model="newPassword"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
          <v-btn @click="changePassword" color="blue" dark class="ma-3">Change </v-btn>
        </v-col>
        <v-col cols="12" sm="2">
          <v-btn @click="save" color="primary">Save</v-btn>
        </v-col>
        <v-col cols="12" sm="4">
          <v-bottom-sheet v-model="sheet">
                <template v-slot:activator="{ on }">
                  <v-btn
                    color="red"
                    dark
                    v-on="on"
                    @click="deleteAccount"
                  >
                    Delete account
                  </v-btn>
                </template>
                <v-sheet class="text-center" height="200px">
                  <v-row justify="center">
                    <v-col cols="12" sm="4">
                      <v-text-field
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="showPassword ? 'text' : 'password'"
                      name="input-10-2"
                      label="Confirn by Password"
                      hint="At least 8 characters"
                      value=""
                      class="input-group--focused"
                      @click:append="showPassword = !showPassword"
                    ></v-text-field>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col cols="12" sm="6">
                      <v-btn
                    class="mt-6"
                    
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
</v-container>
</template>

<script>
import {mapGetters,mapState} from 'vuex'

export default {
  name: 'UserCabinet',
  data: () => ({
      firstname: '',
      lastname: '',
      country: '',
      sex: 'true',
      picker: new Date().toISOString().substr(0, 10),
      oldPassword: '',
      newPassword: '',
      sheet : false,
      rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
        showPassword: false ,

   }),
   computed: {
     ...mapGetters('UserProfile', {
      profile: 'getUser',
    }),
    ...mapState({
      user : s => s.UserProfile.user,
    }),
   },
  methods : {
      changePassword() {
          this.$store.dispatch('UserProfile/changePassword',{
            username : this.user.UserName,
            oldPassword : this.oldPassword,
            newPassword : this.newPassword
          });
          this.newPassword = '';
          this.oldPassword = '';
      },
      save() {
          let u = {
            firstName: this.firstname,
            lastName: this.lastname,
            birthday: new Date(),
            sex: (this.sex== 'true')
          }
          this.$store.dispatch('UserProfile/update',u);
          
      },
      deleteAccount() {
        
      }
  }
}
</script>
