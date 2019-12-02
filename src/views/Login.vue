<template>
  <v-container>
      <div class="title">Login</div>
      <v-form>
        <v-text-field label="Email" v-model="name"></v-text-field>
        <v-text-field
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="showPassword ? 'text' : 'password'"
                      name="input-10-2"
                      label="Password"
                      hint="At least 8 characters"
                      value=""
                      v-model="pass"
                      class="input-group--focused"
                      @click:append="showPassword = !showPassword"
                    ></v-text-field>
  <v-btn @click="login"></v-btn>
      </v-form>
      
  </v-container>
</template>

<script>
import Axios from 'axios';
import https from 'https'; 

Axios.create({
  baseURL: 'https://localhost:44312',
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});
export default {
  data: () => ({
     rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
    showPassword : false,
    name : '',
    pass : '',
  }),
  created() {
      
  },
  methods: {
      login() {
          let t = this;
          let data = {
            grant_type: 'password',
            username : this.name,
            password : this.pass 
            };
            
                Axios({
                method: 'post',
                url: '/token',
                data: data
                }).then(res=>{
                    console.log(res);
                    sessionStorage.setItem("accessToken", res.data.access_token);
                    this.$store.commit('UserProfile/SET_USER_ID',res.data);
                    t.pass = '';
                    t.name = '';
                    this.$router.push('/');
                    
                });


      }
  }
}
</script>
