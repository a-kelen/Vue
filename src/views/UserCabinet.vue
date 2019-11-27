<template>
<v-container>
  <v-sheet class="pa-4">
      <v-row no-gutters="" class="md-8">
        <v-col cols="6">
          <v-text-field class="pa-2"></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field class="pa-2">></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field class="pa-2">></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-date-picker class="ma-4" max="2019-11-24" v-model="picker"></v-date-picker>
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
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
          <v-btn color="blue" dark class="ma-3">Change </v-btn>
        </v-col>
        <v-col cols="12" sm="12">
          <v-bottom-sheet v-model="sheet">
                <template v-slot:activator="{ on }">
                  <v-btn
                    color="red"
                    dark
                    v-on="on"
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
                    flat
                    color="red"
                    dark
                    
                  >Delete</v-btn>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-btn
                    class="mt-6"
                    flat
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

export default {
  name: 'UserCabinet',
  data: () => ({
      sheet : false,
      picker: new Date().toISOString().substr(0, 10),
      rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
        showPassword: false ,

   }),
  methods : {

  }
}
</script>
