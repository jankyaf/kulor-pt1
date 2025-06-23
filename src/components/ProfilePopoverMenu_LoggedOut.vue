<template tag="account_button">
  <div class="text-center">
    <v-menu v-model="menu" :close-on-content-click="false" location="end">
      <template v-slot:activator="{ props }">
        <v-btn icon size="large" v-bind="props"><v-icon>mdi-account-question</v-icon></v-btn>
      </template>

      <v-card min-width="300" color="blue-grey-darken-" >
        <v-list bg-color="transparent">
          <v-list-item title="LOGIN OR REGISTER BELOW">
            <!-- <template v-slot:append>
              <v-btn :class="fav ? 'text-red' : ''" icon="mdi-heart" variant="text" @click="fav = !fav"></v-btn>
            </template> -->
          </v-list-item>
          <v-list-item >
            <v-text-field label="Email" v-model="email" />
            <v-text-field label="Password" v-model="password" />
            <v-btn width="100%" prepend-icon="mdi-login" color="primary" @click="login">LOGIN</v-btn>
            <v-btn width="100%" prepend-icon="mdi-account-plus" color="secondary" @click="register" class="mt-2">REGISTER</v-btn>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

      </v-card>
    </v-menu>
  </div>
</template>

<!-- -------------------------------------------------------------------------- -->
<script setup>
import { ref } from "vue";

const fav = ref(true);
const menu = ref(false);
const message = ref(false);
const hints = ref(true);
</script>
