<template tag="account_button">
  <div class="text-center">
    <v-menu v-model="menu" :close-on-content-click="false" location="end">
      <template #activator="{ props }">
        <v-btn icon size="large" v-bind="props"><v-icon>mdi-account-question</v-icon></v-btn>
      </template>

      <v-card color="blue-grey-darken-" min-width="300">
        <v-list bg-color="transparent">
          <v-list-item title="LOGIN OR REGISTER BELOW">
            <!-- <template v-slot:append>
              <v-btn :class="fav ? 'text-red' : ''" icon="mdi-heart" variant="text" @click="fav = !fav"></v-btn>
            </template> -->
          </v-list-item>
          <v-list-item>
            <v-text-field v-model="email" label="Email" />
            <v-text-field v-model="password" label="Password" />
            <v-btn
              class="mt-2"
              color="primary"
              prepend-icon="mdi-login"
              width="100%"
              @click="login"
            >LOGIN</v-btn>
            <v-btn
              class="mt-2"
              color="secondary"
              prepend-icon="mdi-account-plus"
              width="100%"
              @click="register"
            >REGISTER</v-btn>
          </v-list-item>
        </v-list>

        <v-divider />

      </v-card>
    </v-menu>
  </div>
</template>

<!-- -------------------------------------------------------------------------- -->
<script setup>
  import { ref } from 'vue'

  const fav = ref(true)
  const menu = ref(false)
  const message = ref(false)
  const hints = ref(true)
</script>
